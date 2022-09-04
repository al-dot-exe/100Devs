const path = require('path'); // core lets you grab assets from path
const express = require('express'); // Our framework
const mongoose = require('mongoose'); // Bring in mongodb tools
const dotenv = require('dotenv'); // setups up environment variables
const morgan = require('morgan'); // Basic logging
const exphbs = require('express-handlebars'); // Template engine for Views
const methodOverride = require('method-override'); // changes POST to PUT
const passport = require('passport'); // authentication
const session = require('express-session'); //app session middleware for passport js
const MongoStore = require('connect-mongo'); // Stores session information
const connectDB = require('./config/db'); // MongoDB connection

// Load config
dotenv.config({
  path: './config/config.env'
});

// Passport config
require('./config/passport')(passport)

connectDB(); // connecting to DB using mongoose

const app = express();

// Body Parser 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method override
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Basic Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Handlebars Helpers
const { formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs');

// Handlebars for views
// Template engine wraps common elements from main onto all views
app.engine('.hbs', exphbs.engine({
  helpers: {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select
  },
  defaultLayout: 'main', extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Sessions must be ABOVE Passport middleware


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false, // Don't create session till storage
  store: new MongoStore({ mongoUrl: mongoose.connection.client.s.url }) // made slight changes here from Traversy
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global var
app.use(function(req, res, next) {
  res.locals.user = req.user || null
  next();
});



// Static folder for public css files and front end js, images etc.
app.use(express.static(path.join(__dirname, 'public')));

// Route links
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories'));

// Listen
const PORT = process.env.PORT || 5000
app.listen(
  PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

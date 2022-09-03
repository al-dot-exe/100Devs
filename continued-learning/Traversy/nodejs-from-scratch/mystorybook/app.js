const path = require('path'); // core lets you grab assets from path
const express = require('express'); // Our framework
const dotenv = require('dotenv'); // setups up environment variables
const morgan = require('morgan'); // Basic logging
const exphbs = require('express-handlebars'); // Template engine for Views
const passport = require('passport'); // authentication
const session = require('express-session'); //needed for passport js
const connectDB = require('./config/db'); // MongoDB connection

// Load config
dotenv.config({
  path: './config/config.env'
})

// Passport config
require('./config/passport')(passport)

connectDB(); // connecting to DB using mongoose

const app = express();

// Basic Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Handlebars for views
// Template engine wraps common elements from main onto all views
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Sessions must be ABOVE Passport middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false, // Don't create session till storage
}));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session());

// Static folder for public css files and front end js, images etc.
app.use(express.static(path.join(__dirname, 'public')));

// Route links
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000

app.listen(
  PORT, console.log(`Server running in ${process.env.NODE_ENV} mode port ${PORT}`)
);

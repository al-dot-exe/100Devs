// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config({ path: "./config/.env" });

const app = express();
app.set('view engine', 'ejs');


// environment variables
const databaseUsername = process.env.MONGO_USER;
const databasePassword = process.env.MONGO_PASS;


app.use(express.json()) // json parsing
app.use(express.static('public')) // accesses static public folder
app.use(morgan('tiny')); // basic logging
app.use(bodyParser.urlencoded({ extended: true })) // BODY PARSER GOES BEFORE CRUD HANDLERS!!!

// DATABASE STUFF
MongoClient.connect(`mongodb+srv://${databaseUsername}:${databasePassword}@cluster.mnbtu9j.mongodb.net/?retryWrites=true&w=majority`)
  .then(client => {
    console.log("Connected to Database")
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');

    // ROUTES | HANDLERS

    // Create
    app.post('/quotes', (req, res) => {
      const body = req.body
      body.name = body.name.replace(/\b\w/g, c => c.toUpperCase());
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/'); // redirects back to page after the object is inserted
        })
        .catch(err => console.log(err))
    });

    // Read
    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(results => {
          res.render('index.ejs', { quotes: results });
        })
        .catch(err => console.log(error));
    });

    // Update
    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Hagrid' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => {
          res.json('Success');
        })
        .catch(err => console.log(err))
    });

    // Delete
    app.delete('/quotes', (req, res) => {
      quotesCollection.deleteOne(
        { name: req.body.name }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quotes to delete');
          }
          res.json(`Deleted Yoda's quote`)
        })
        .catch(error => console.error(error));
    })

    app.listen(process.env.PORT, function() {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err))

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const countriesRouter = require('./countries_router.js')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('countries_hub');
  const countriesCollection = db.collection('countries');
  router.use('/api/countries', countriesRouter(countriesCollection));
});


module.exports = router;

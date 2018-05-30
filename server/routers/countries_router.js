const express = require('express');
const router = express.Router();

const countriesRouter = function(countriesCollection) {

  router.get('/', (req, res) => {
    countriesCollection.find().toArray()
      .then((docs) => res.json(docs));
  });

  return router;
}

module.exports = countriesRouter;

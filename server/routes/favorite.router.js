const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  //GET IMAGES FROM DATABASE
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  //POST INFO INTO DATABASE
  console.log('in post /api/favorite', req.body);
  let queryString = `INSERT INTO "favorites" ("image") VALUES ${req.body}`
  let favorite = req.body;
  pool.query(queryString, [favorite.image]).then((result)=> {
    res.sendStatus(201);
  }).catch((err) => {
    console.log('Error in post route', err);
    res.sendStatus(500);
  });//end pool
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

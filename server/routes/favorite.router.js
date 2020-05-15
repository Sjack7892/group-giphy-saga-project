const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('in GET favorite ROUTER');
  //GET IMAGES FROM DATABASE
  let queryString = 'SELECT * FROM "favorites" ORDER BY "id";';
  pool.query(queryString)
    .then(result => {
      console.log('Getting favorite data:', result.rows)
      res.send(result.rows);
    }).catch(err => {
      console.log('Error in getting favorite picture', err);
    })
  // res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  //POST INFO INTO DATABASE
  console.log('in post /api/favorite', req.body);
  let favorite = req.body.fav;
  let queryString = `INSERT INTO "favorites" ("image") VALUES ('${favorite}');`
  pool.query(queryString).then((result) => {
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

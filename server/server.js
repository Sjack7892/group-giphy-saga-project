const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


//API
const dotenv = require('dotenv');
dotenv.config(); 
//verifying if it works by checking server terminal
console.log('GIPHY_API_KEY:', process.env.GIPHY_API_KEY);
//Get API
app.get('/search/:searchValue', (req, res) => {
  console.log('in /search GET:', req.params.searchValue);
  let searchValue = req.params.searchValue;
  // make a request to giphy here using your API key
  console.log('/search GET');
  axios.get('http://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_API_KEY + '&rating=pg&q=' + searchValue)
    .then((response) => {
      res.send(response.data);
    }).catch((err) => {
      console.log(err);
      res.send(500);
    });//end axios
});//end get


// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const express = require('express');
const router  = express.Router();

const newRow = require('../db/queries/newRow');
const movieAPI = require('../db/queries/toWatch');
const bookAPI = require('../db/queries/toRead');
const shopAPI = require('../db/queries/toBuy');
const foodAPI = require('../db/queries/toEat');

router.post('/', async (req, res) => {
  console.log('connected to back-end server'); //the button is linked to its server
  const userInput = req.body.search;
  let newRowMessage = [];

  //responses of all API calls; success or undefined
  const promise1 = movieAPI(userInput);
  const promise2 = bookAPI(userInput);
  const promise3 = shopAPI(userInput);
  const promise4 = foodAPI(userInput);
  const [resMovieAPI, resBookAPI, resShopAPI, resFoodAPI] = await Promise.all([promise1, promise2, promise3, promise4]);

  if(resMovieAPI) {
    let arrQuery = [];
    arrQuery.push(`${userInput}`, 1); //movie category has an id of 1
    newRow(arrQuery);
    newRowMessage.push(' a new row belonging to Movie list has been added');
  }

  if (resBookAPI) {
    let arrQuery = [];
    arrQuery.push(`${userInput}`, 2); //book category has an id of 2
    newRow(arrQuery);
    newRowMessage.push(' a new row belonging to Book list has been added');
  }

  if(resShopAPI) {
    let arrQuery = [];
    arrQuery.push(`${userInput}`, 3); //shopping category has an id of 3
    newRow(arrQuery);
    newRowMessage.push(' a new row belonging to Shopping list has been added');
  };

  if(resFoodAPI) {
    let arrQuery = [];
    arrQuery.push(`${userInput}`, 4); //restaurant category has an id of 4
    newRow(arrQuery);
    newRowMessage.push(' a new row belonging to Restaurant list has been added');
  };

  return res.json(newRowMessage);
});

module.exports = router;


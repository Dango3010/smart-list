const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

const addingBook = require('../db/queries/add-new-book'); //import book-api-testing func and add-new-book-row func
const FoodApi = require('../db/queries/toEat-api'); //import FoodApi func to test
const ShopApi = require('../db/queries/toBuy-api'); //import ShopApi func to test
const NewRow2 = require('../db/queries/add-new-row2'); //import adding-new-row func for the other 3 APIs

router.post('/', async (req, res) => {
  console.log('connected to back-end server'); //to show the button's link is connected to its server
  const user_input = req.body.search; //req.body = {search: input} of 'data' in app.js (front-end)
  console.log('user_input:', user_input); //to confirm the user input

  //the if statement for Book API
  const newBook = await addingBook.newBook(user_input);
  if (newBook) { //if the task is a book; newBook = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
    addingBook.NewRow(newBook, user_input); //adding a row into the database, Book list has an id of 2
    return res.send('a new row belonging to book list has been added'); //go to DevTools: inspect --> console to see the message
  }

  //the if statements for Food API and shopping API
  let arrQuery = [];
  const resFoodApi = await FoodApi(user_input); //success or undefined
  const resShopApi = await ShopApi(user_input); //success or undefined

  if(resFoodApi) {
    arrQuery.push(`1989-06-06`,`${user_input}`, 4, '2022-06-06'); //for restaurant list, restaurant category has an id of 4
    NewRow2(arrQuery);
    return res.send('a new row belonging to restaurant list has been added');
  };

  if(resShopApi) {
    arrQuery.push(`1989-06-06`,`${user_input}`, 3, '2022-06-06'); //for product list, product category has an id of 3
    NewRow2(arrQuery);
    return res.send('a new row belonging to product list has been added');
  };

  //insert other items into the movie list
  arrQuery.push(`1989-06-06`,`${user_input}`, 1, '2022-06-06'); //for movie list, movie category has an id of 1
  NewRow2(arrQuery);
  return res.send('a new row belonging to movie list has been added');
});

module.exports = router;

//below is my own note, don't bother reading it
//'await' is always used for any func that returns a promise, to resolve the promise and get back either its right output or undefined (an error occurred)
/* if (movie api) {
  //   return res.redirect('http://localhost:8080/api/users')
  // } //when u have a bunch of if statements, a return in one if statement will stop the func from running further,
  no return means that the func will continue to read the other if statements
*/

//successful responses to show off:
//to-buy only: cotton-pullover-embroidery-sweatshirt-women
//to-eat only: arturos-to-go
//to-read only: sakura
//to-watch only: supernatural and superman
//both to-buy and to-read: men-shoes

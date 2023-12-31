
const express = require('express');
const router = express.Router();
const {listBooks, listMovies, listProducts, listRestaurants, deleteTask, getUsers} = require('../db/queries/dbqueries')



router.get('/:id', (req, res) => {
 console.log('id:', req.params.id);

const id=req.params.id;

  if (id==='purchase') {
    listProducts().then(tasks=>{
      const templateVars={list:tasks}
      res.render("purchase", templateVars)})
    .catch(e => {
      console.error("Product error",e);
      res.send(e)
    });


  }
   if (id==='restaurant') {
    listRestaurants().
    then(tasks=>{

      const templateVars={list:tasks}
      res.render("restaurant",templateVars)})
    .catch(e => {
      console.error("Restaurant error",e);
      res.send(e)
    });

  }

   if (id==='movies') {
    listMovies()
    .then(tasks=>{
      const templateVars={list:tasks}
      //console.log("MOVIESSS LIST", templateVars);
      res.render("movies", templateVars)})

    .catch(e => {
      console.error("MOvies error",e);
      res.send(e)
    });

  }
   if (id==='books') {
    listBooks()
    .then(tasks=>{
      const templateVars={list:tasks}//object list with array of books
        //console.log('BOOKS LIST', templateVars);

      res.render("books", templateVars)})
         .catch(e => {
          console.error("To read error",e);
          res.send(e)
        });
  }
 // res.render("category-page");
});

router.post('/:id/delete', (req, res) => {
  id = req.params.id

  console.log('ID', req.params.id);
  deleteTask(req.params.id)
  // fix redirection so that it goes to the category deleted
  res.redirect(`/category/books`)
});

router.get('/:id/edit', (req, res) => {

})


module.exports = router;

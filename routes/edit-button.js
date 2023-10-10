const express = require('express');
const router  = express.Router(); //= the app variable we often use

router.get('/:category', (req, res) => {
  console.log('category:', req.params.id);
  res.render("edit-page");
});

module.exports = router;

/*
//to handle the edit button
app.post("/urls/:id/edit", (req, res) => {
  const urlId = req.params.id; // = shortened URL = b2xVn2 / 9sm5xK
  const userID = req.session.user_id;
  if (!urlDatabase[urlId]) return res.send('the URL id does not exist');
  if(!userID) return res.send('you need to login or register first');
  if (urlDatabase[urlId].userID !== userID) return res.send('you do not own this URL page');

  urlDatabase[urlId].longURL = req.body.longURL; //update the longURL of an ID
  res.redirect("/urls"); //redirect to the home page
});
*/

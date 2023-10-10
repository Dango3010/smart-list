//this file will add a new row for the other 3 APIs categories
const db = require('../connection'); //like the pool variable we often use

const NewRow2 = (arr) => {
  return db //NewRow2 is returning a promise with result.rows. .then() or await the func to get result.rows array to use in other funcs
    .query(`
      INSERT INTO tasks (name, category_id)
      VALUES ($1, $2)
      RETURNING *;
      `,
      arr)
    .then(result => {
        console.log('result.rows:',result.rows); //the newly inserted row = an array with one obj
        return result.rows;
      })
    .catch(err => console.log('NewRow2 func error:', err.message)); //catch any error that may occur
};

module.exports = NewRow2;

const db = require('../connection');

//add a new row to any of the 4 categories in the database
const newRow = (arr) => {
  return db
    .query(`
      INSERT INTO tasks (name, category_id)
      VALUES ($1, $2)
      RETURNING *;
      `,
      arr)
    .then(result => {
        console.log('new row added:',result.rows);
        return result.rows;
      })
    .catch(err => console.log('newRow func error:', err.message));
};

module.exports = newRow;

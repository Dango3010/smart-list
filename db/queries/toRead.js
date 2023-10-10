const axios = require('axios');

//call API to a fake library and get a response
async function bookAPI(input) {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${input}`);
    return response.status;
  }
  catch (error) {
    console.error(`bookAPI func error: ${error}`);
  }
}

module.exports = bookAPI;

//for testing, successful user-input: 'Harry Potter', 'Friends'

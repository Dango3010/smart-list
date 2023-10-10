const axios = require('axios');

//call API to a movie store and get a response
const movieAPI = async (input) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${input}`);
    return response.status;
  }
  catch(err) {
    console.error('movieAPI func error', err.message);
  };
}

module.exports = movieAPI;

//for testing, successful user-input: 'Harry Potter', 'Friends'

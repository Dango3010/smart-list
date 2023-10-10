const axios = require('axios');

//call API to a fake food truck and get a response
const foodAPI = async (input) => {
  try {
    const response = await axios.get(`http://data.streetfoodapp.com/1.1/vendors/${input}`);
    return response;
  }
  catch(err) {
    console.error('foodAPI func error:', err.message);
  };
}

module.exports = foodAPI;

//for testing, successful user input: arturos-to-go

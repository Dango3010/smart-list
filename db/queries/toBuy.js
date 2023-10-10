const axios = require('axios');

//call API to a fake e-commerce store and get a response
const shopAPI = async (input) => {
  try {
    const response = await axios.get(`https://api.storerestapi.com/products/${input}`);
    return response.data.message;
  }
  catch(err) {
    console.error('shopAPI func error:', err.message);
  };
}

module.exports = shopAPI;

//for testing, successful user input: special-cotton-shirt-for-men

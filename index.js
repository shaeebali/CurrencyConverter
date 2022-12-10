//import/require dependencies
require('dotenv').config();

// API Providers
// IP Data
const ipdata = {
  baseurl: 'https://api.ipdata.co',
  key: process.env.API_KEY_IPDATA,
  
  //create a method
  currency: function () {
    return `${this.baseurl}/currency?api-key=${ipdata.key}`
  }
}



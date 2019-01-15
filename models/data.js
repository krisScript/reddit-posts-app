const fetch = require('node-fetch');
module.exports = class Data {
  constructor(searchTerm,sortBy,searchLimit) {
    this.searchTerm = searchTerm,
      this.sortBy = sortBy,
      this.searchLimit = searchLimit
      this.apiUrl =  `https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
  }
  async getData() {
    const response = await fetch(this.apiUrl);
    const responseData = await response.json()
    return responseData
  }

  
};

const axios = require('axios');
const path = require('node:path');
const config = require('../config.js');


let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    username: username,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, options)
  .then((repoData) => {
    return repoData;
  })
  .catch((err) => {
    throw new Error(err);
  })
}

module.exports.getReposByUsername = getReposByUsername;
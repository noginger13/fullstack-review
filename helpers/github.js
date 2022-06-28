const axios = require('axios');
const path = require('node:path');
const config = require('../config.js');
const {save} = require('../database/index.js');


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
    let repos = repoData.data;
    let repoArray = [];
    for (const repo of repos) {
      let currentRepo = {};
      currentRepo.repo_id = repo.id;
      currentRepo.name = repo.name || '';
      currentRepo.url = repo.html_url;
      currentRepo.description = repo.description || '';
      currentRepo.stars = repo.stargazers_count;
      currentRepo.owner = repo.owner.login;
      repoArray.push(currentRepo);
    }
    save(repoArray);
  })
  .catch((err) => {
    console.log('user does not exist!');
  })
}

module.exports.getReposByUsername = getReposByUsername;
const express = require('express');
const {getReposByUsername} = require('../helpers/github.js');
const {find} = require('../database/index.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  let username = req.body.username;
  getReposByUsername(username);


  res.status(201);
  res.end('Username search');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  find((err, data) => {
    if (err) {
      res.status(404);
      res.end('No repos found!');
    } else {
      res.status(200);
      res.end(JSON.stringify(data));
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


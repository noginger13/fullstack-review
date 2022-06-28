const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  repo_id: {
    type: Number,
    unique: true
  },
  name: String,
  url: String,
  description: String,
  stars: Number,
  owner: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArray) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repoArray.forEach((repo) => {
    Repo.create(repo, (err, data) => {
      if (err) {
        console.log('something was not saved')
      } else {
        console.log('something was saved');
      }
    })
  })
}

module.exports.save = save;
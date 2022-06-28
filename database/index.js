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

const save = (repoArray) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repoArray.forEach((repo) => {
    Repo.create(repo, (err, data) => {
      if (err) {
        console.log('A duplicate repo was not saved')
      } else {
        console.log('A new repo was saved');
      }
    })
  })
};

const find = (callback) => {
  Repo.
  find().
  sort({stars: 'desc'}).
  limit(25).
  exec(callback);
};

module.exports.save = save;
module.exports.find = find;
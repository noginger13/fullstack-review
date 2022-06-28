import React from 'react';

const RepoListEntry = ({repo}) => (
  <div key={repo._id}>
    <h4 key={repo.name}>
      <a href={repo.url}>
      {repo.name} </a>
    </h4>
    <span>{repo.description}</span>
    <br></br>
    <span>Github Username: {repo.owner}</span>
    <br></br>
    <span>Stars: {repo.stars}</span>
  </div>
)

export default RepoListEntry;

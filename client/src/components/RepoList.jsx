import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    These are the most starred {repos.length} repos.
    {repos.map((repo) => {
      return <RepoListEntry repo={repo}/>
    })}
  </div>
)

export default RepoList;
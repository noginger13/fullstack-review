import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    These are the {repos.length} most starred repos.
    {repos.map((repo) => {
      return <RepoListEntry repo={repo}/>
    })}
  </div>
)

export default RepoList;
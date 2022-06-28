import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    $.get('/repos', (repoData) => {
      this.setState({repos: JSON.parse(repoData)})
    });
  }

  search (username) {
    $.post('/repos', {username})
      .done(() => {
        setTimeout($.get('/repos', (repoData) => {
          this.setState({repos: JSON.parse(repoData)})
        }), 1000);
      })
      .fail((err) => {
        throw new Error(err);
      })
      ;
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
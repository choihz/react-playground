import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GitHubUser from './components/GitHubUser';
import RepositoryReadme from './components/RepositoryReadme';
import UserRepositories from './components/UserRepositories';

const App = () => {
  const login = 'choihz';
  const [repo, setRepo] = useState('choihz');

  return (
    <>
      <GitHubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

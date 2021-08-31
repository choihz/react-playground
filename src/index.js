import React from 'react';
import ReactDOM from 'react-dom';
import GitHubUser from './components/GitHubUser';

const App = () => {
  return <GitHubUser login="choihz" />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

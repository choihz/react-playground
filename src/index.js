import React from 'react';
import ReactDOM from 'react-dom';
import Star from './components/Star';

const App = () => {
  return <Star />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

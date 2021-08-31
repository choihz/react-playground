import React from 'react';
import ReactDOM from 'react-dom';
import Windowing from './components/Windowing';

const App = () => {
  return <Windowing />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

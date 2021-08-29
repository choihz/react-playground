//@flow

import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  item: string,
  cost?: number,
};

const App = (props: Props) => {
  return (
    <div>
      <h1>{props.item}</h1>
      <p>Cost: {props.cost}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App item="some item" />
  </React.StrictMode>,
  document.getElementById('root')
);

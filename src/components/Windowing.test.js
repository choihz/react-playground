import React from 'react';
import ReactDOM from 'react-dom';
import Windowing from './Windowing';

test('renders users', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Windowing />, div);

  expect(div.querySelector('img')).toHaveAttribute('width', '50');
});

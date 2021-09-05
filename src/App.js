import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Events, Products, Contact } from './pages';

const App = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;

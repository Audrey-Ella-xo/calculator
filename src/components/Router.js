import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Quotes from './Quotes';
import Nav from './Nav';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" exact component={App} />
        <Route path="/quotes" exact component={Quotes} />
      </Switch>
    </div>
  </Router>
);

export default Routes;

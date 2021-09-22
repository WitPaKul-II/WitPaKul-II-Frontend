import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Team from './views/Team';
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/team' component={Team} />
            <Route path='/product/*' component={Product} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

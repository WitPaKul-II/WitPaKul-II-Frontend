import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Team from '../views/Team';
import Contact from '../Contact';
import Product from '../components/Product';
class App extends Component {
  render() {
    return (
    <Router>
        <div>
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/product' component={Product} />
              <Route path='/team' component={Team} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
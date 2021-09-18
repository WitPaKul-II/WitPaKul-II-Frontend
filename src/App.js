import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import Home from './views/Home';
import Team from './views/Team';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/team' component={Team} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewComp from '../NewComp';
import Button from 'react-bootstrap/Button';

class Home extends Component {
  render() {
    return (
        
        <div>
        
            <h1>Welcome to Witpakul Shop</h1>
          
            <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          </div>
          <hr />
        <NewComp/>
        <Button/>
        </div>
    );
  }
}

export default Home;
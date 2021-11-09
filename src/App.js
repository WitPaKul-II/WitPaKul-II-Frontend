import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './views/AddProduct';
import EditProduct from './views/EditProduct';
import Home from './views/Home';
import Team from './views/Team';
import Profile from './views/Profile';
import Shop from './views/Shop';
import Product from './views/Product';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/team' component={Team} />
            <Route path='/profile' component={Profile} />
            <Route path='/shop' component={Shop} />
            <Route path='/product/*' component={Product} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/addproduct' component={AddProduct} />
            <Route path='/editproduct/*' component={EditProduct} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

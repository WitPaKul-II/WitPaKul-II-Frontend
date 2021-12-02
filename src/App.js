import './App.css';
import React, { useState, useEffect, } from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './views/AddProduct';
import EditProduct from './views/EditProduct';
import Home from './views/Home';
import Team from './views/Team';
import Profile from './views/Profile';
import Shop from './views/Shop';
import UserProduct from './views/UserProduct';
import Product from './views/Product';
import Users from './views/Users';
import Brand from './views/Brand';
import Color from './views/Color';
import Login from './components/Login';
import Register from './components/Register'
import AddBrand from './views/AddBrand';
import EditBrand from './views/EditBrand';
import AddColor from './views/AddColor';
import EditColor from './views/EditColor';
const App = () => {
  const [ShowUsersBoard, setShowUsersBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      setShowUsersBoard(currentUser.user_type.type_name === "Customer");
      setShowAdminBoard(currentUser.user_type.type_name === "Admin1");
    } else {
      setShowAdminBoard(false);
      setShowUsersBoard(false);
    }
  }, [currentUser]);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/shop' component={Shop} />
          {showAdminBoard && (
            <Route path='/product/*' component={Product} />
          )}
          {showAdminBoard && (
            <Route path='/addproduct' component={AddProduct} />
          )}
          {showAdminBoard && (
            <Route path='/editproduct/*' component={EditProduct} />
          )}
          {showAdminBoard && (
            <Route path='/users' component={Users} />
          )}
          {showAdminBoard && (
            <Route path='/brand' component={Brand} />
          )}
          {showAdminBoard && (
            <Route path='/addbrand' component={AddBrand} />
          )}
          {showAdminBoard && (
            <Route path='/editbrand' component={EditBrand} />
          )}
          {showAdminBoard && (
            <Route path='/color' component={Color} />
          )}
          {showAdminBoard && (
            <Route path='/addcolor' component={AddColor} />
          )}
          {showAdminBoard && (
            <Route path='/editcolor' component={EditColor} />
          )}
          <Route path='/userproduct/*' component={UserProduct} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </Router>

  );

}

export default App;


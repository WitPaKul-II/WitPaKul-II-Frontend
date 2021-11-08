import './App.css';
import React, {useState,useEffect, } from 'react';
import {  useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './views/AddProduct';
import EditProduct from './views/EditProduct';
import Home from './views/Home';
import Team from './views/Team';
import Shop from './views/Shop';
import UserShop from './views/UserShop';
import UserProduct from './views/UserProduct';
import Product from './views/Product';
import Login from './components/Login';
import Register from './components/Register'
// import Profile from './components/Profile';

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
            {showAdminBoard && (
            <Route path='/shop' component={Shop} />
            )}
             {showAdminBoard && (
            <Route path='/product/*' component={Product} />
             )}
            {showAdminBoard && (
            <Route path='/addproduct' component={AddProduct} />
            )}
             {showAdminBoard && (
            <Route path='/editproduct/*' component={EditProduct} />
             )}
            {ShowUsersBoard && (
            <Route path='/usershop' component={UserShop} />
            )}
             {ShowUsersBoard && (
            <Route path='/userproduct/*' component={UserProduct} />
            )}
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {/* <Route path='/profile' component={Profile} /> */}
            
          </Switch>
        </div>
      </Router>
    );
  
}

export default App;

// import './App.css';
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AddProduct from './views/AddProduct';
// import EditProduct from './views/EditProduct';
// import Home from './views/Home';
// import Team from './views/Team';
// import Shop from './views/Shop';
// import UserShop from './views/UserShop';
// import UserProduct from './views/UserProduct';
// import Product from './views/Product';
// import Login from './components/Login';
// // import Register from './components/Register';
// // import Profile from './components/Profile';
// import Register from './components/Register'


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/team' component={Team} />
//             <Route path='/shop' component={Shop} />
//             <Route path='/product/*' component={Product} />
//             <Route path='/addproduct' component={AddProduct} />
//             <Route path='/editproduct/*' component={EditProduct} />
//             <Route path='/usershop' component={UserShop} />
//             <Route path='/userproduct/*' component={UserProduct} />
//             <Route path='/login' component={Login} />
//             <Route path='/register' component={Register} />
//             {/* <Route path='/profile' component={Profile} /> */}
            
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

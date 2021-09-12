import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductItems from '../components/ProductItems';
import Footerbar from '../components/Footerbar';

class Shop extends Component {
  render() {
    return (

      <div>
          <Navbar/>
          <ProductItems/>
          <Footerbar/>
      </div>

    );
  }
}

export default Shop;

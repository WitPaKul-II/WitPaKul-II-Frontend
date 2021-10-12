import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ProductItems from '../components/ProductItems';
import Footerbar from '../components/Footerbar';

class Shop extends Component {
  render() {
    return (
      <div>
        <Navbar search={true}/>
        <ProductItems />
        <Footerbar />
      </div>
    );
  }
}

export default Shop;

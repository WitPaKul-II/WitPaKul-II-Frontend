import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BrandItem from '../components/BrandItem';
import Footerbar from '../components/Footerbar';

class Brand extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <BrandItem />
        <Footerbar />
      </div>
    );
  }
}

export default Brand;

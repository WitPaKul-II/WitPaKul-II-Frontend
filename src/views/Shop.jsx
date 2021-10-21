import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ProductItems from '../components/ProductItems';
import Footerbar from '../components/Footerbar';

class Shop extends Component {
  state = {
    searchText: ''
  };

  handleSearchChange = (event) =>  {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <div>
        <Navbar search={true} onChange={this.handleSearchChange}/>
        <ProductItems searchText={this.state.searchText}/>
        <Footerbar />
      </div>
    );
  }
}

export default Shop;

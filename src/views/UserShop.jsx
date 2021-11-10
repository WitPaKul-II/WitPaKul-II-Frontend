import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import UserProductItems from '../components/UserProductItems';
import Footerbar from '../components/Footerbar';

class UserShop extends Component {
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
        <UserProductItems searchText={this.state.searchText}/>
        <Footerbar />
      </div>
    );
  }
}

export default UserShop;

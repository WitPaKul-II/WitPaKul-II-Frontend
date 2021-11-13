import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AccountTemplate from '../components/AccountTemplate';
import Footerbar from '../components/Footerbar';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AccountTemplate />
        <Footerbar />
      </div>
    );
  }
}

export default Profile;

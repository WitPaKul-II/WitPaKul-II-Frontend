import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AccountTemplate from '../components/AccountTemplate';
import Footerbar from '../components/Footerbar';

class Profile extends Component {
  componentWillMount() {
    var user = JSON.parse(localStorage.getItem("user"));
    user._birth_date = new Date(user.birth_date)
    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    user.birth_date = (new Date(user._birth_date - tzoffset)).toISOString().slice(0, -1);
    this.setState({
      user: user,
      imageFileURL: process.env.REACT_APP_BACKEND + 'users/images/' + user.user_image_url
    });
  }
  render() {
    const query = new URLSearchParams(this.props.location.search);
    const id = query.get('id')
    return (
      <div>
        <Navbar />
        <AccountTemplate id={id}/>
        <Footerbar />
      </div>
    );
  }
}

export default Profile;

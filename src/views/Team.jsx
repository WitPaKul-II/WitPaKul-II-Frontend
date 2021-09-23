import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import TeamMember from '../components/TeamMember';
import Footerbar from '../components/Footerbar';

class Team extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TeamMember />
        <Footerbar />
      </div>
    );
  }
}

export default Team;

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import TeamMember from '../components/TeamMember';

class Team extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TeamMember />
      </div>
    );
  }
}

export default Team;

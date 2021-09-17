import React, { Component } from 'react';
import { Counter } from '../test/counter/Counter'; // TODO: remove when develop

class Home extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';

class NewComp extends Component {
  render() {
    return (
        <div>
          <div>
            <h2>LucK KonoSuba</h2>
          </div>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/>
            <input type="submit" value="Submit"/>
        </div>
    );
  }
}

export default NewComp;
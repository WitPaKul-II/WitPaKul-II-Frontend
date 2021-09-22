import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <div>
        <section class="section container ">
          <div class="columns is-centered  ">
            <div class="column  is-half bg-white rounded-5 shadow-5-strong p-5 col-xl-5 col-md-8">
              <div class="field ">
                <div class="label col-12 col-md-8 col-lg-12 col-md-5 text-center">
                  <h1>Sign in</h1>
                </div>
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="text" name="username" />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" name="password" />
                </div>
              </div>
              <div class="field is-grouped">
                <div classe="control">
                  <Link to="/"><button class="button is-link">Submit</button></Link>
                </div>
                <div class="control">
                  <Link to="signup" > <button className="button is-text">Register</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SignIn;

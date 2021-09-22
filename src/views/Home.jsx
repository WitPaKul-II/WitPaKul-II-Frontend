import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SlideHome from '../components/SlideHome';
import Footerbar from '../components/Footerbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SlideHome />
              
        <div>
          <section class="fdb-block pt-5">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-5 text-center pb-md-5 ">
                  <h1>Witpakul Shop</h1>
                  <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section class="fdb-block">
            <div class="container">
              <div class="row text-left">
                <div class="col-12 col-md-8 m-auto col-lg-4">
                  <div class="fdb-box fdb-touch">
                    <h2>Step 1</h2>
                    <p>Far far away, behind the word mountains, far from the country Vokalia, there live the blind texts.</p>
                  </div>
                </div>
                <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                  <div class="fdb-box fdb-touch">
                    <h2>Step 2</h2>
                    <p>Separated they live in Bookmarks right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
                <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                  <div class="fdb-box fdb-touch ">
                    <h2>Step 3</h2>
                    <p>A small river named Duden flows by their small place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footerbar />
      </div>
    );
  }
}

export default Home;

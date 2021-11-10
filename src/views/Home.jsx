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
          <section className="fdb-block pt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-5 text-center pb-md-5 ">
                  <h1>Witpakul Shop</h1>
                  <p className="lead">It is an E-commerce website that sells products. Customers or interested people can come and shop on the web.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="fdb-block">
            <div className="container">
              <div className="row text-left">
                <div className="col-12 col-md-8 m-auto col-lg-4">
                  <div className="fdb-box fdb-touch">
                    <h2>Step 1</h2>
                    <p>You can go to the team page and the shop page to see the product details as needed. </p>
                  </div>
                </div>
                <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                  <div className="fdb-box fdb-touch">
                    <h2>Step 2</h2>
                    <p>You can login to become a member and you can edit your own account. </p>
                  </div>
                </div>
                <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                  <div className="fdb-box fdb-touch ">
                    <h2>Step 3</h2>
                    <p>Only admin can add products or delete and edit products. </p>
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

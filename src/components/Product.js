import React, { Component } from 'react';


class Product extends Component {
  render() {
    return (
      <div>
        <section class="py-5">
          <div class="container px-4 px-lg-5 my-5 ">
            <div class="row gx-4 gx-lg-5 align-items-center">
              {/*dummyimage*/}
              <div class="col-md-6">
                <img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/300x300/" alt="..." />
              </div>
              <div class="col-md-6">
                {/* BRAND NAME */}
                <div class="mb-1 fw-bolder">BRAND NAME</div>
                {/* Product */}
                <h1 class="display-5 fw-bolder text-black">Product .....</h1>
                {/* date */}
                <div class="mb-1 ">09/09/2021</div>
                {/* details */}
                <p class="lead">Knowing how to perform a World Flipper reroll will make your first few hours with the game that much easier. Here's how to do it:</p>
                {/* colors brand index.css */}
                <div class="d-flex  align-items-center mt-2 mb-2 fw-bolder  "> <span>colors</span>
                  <ul>
                    <li class="yellow"></li>
                    <li class="black"></li>
                    <li class="blue"></li>
                  </ul> </div >
                {/* price && button */}
                <div class="fs-5 mb-5 d-flex align-items-center fw-bolder text-warning justify-content-between " >
                  <span>$40.00</span>
                  <button class=" btn btn-primary btn-lg flex-shrink-0" type="button">
                    <i class="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div >
              </div >
            </div >
          </div >
        </section >
      </div >
    );
  }
}

export default Product;

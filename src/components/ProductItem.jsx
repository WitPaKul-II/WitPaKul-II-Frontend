import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class ProductItem extends Component {
  getRandomInt(start, end, step) {
    return Math.floor(Math.random() * (end-start) / step) * step + start;
  }
  render() {
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <MDBNavLink to={"/product/" + this.props.data.product_code}>
            <div class="view overlay">
              <img src={"https://dummyimage.com/" + this.getRandomInt(250, 350, 10) + "x" + this.getRandomInt(350, 400, 10)} class="card-img-top" alt="" />
              <div class="mask rgba-white-slight"></div>
            </div>
            <div class="card-body text-center">
              <h5>
                <div class="grey-text">{this.props.data.brand.brand_name}</div>
              </h5>
              <h5>
                <strong>
                  <div class="dark-grey-text">{this.props.data.product_name}</div>
                </strong>
              </h5>
              <h4 class="font-weight-bold blue-text">
                <strong>฿{this.props.data.price}</strong>
              </h4>
            </div>
          </MDBNavLink>
        </div>
      </div>
    );
  }
}

export default ProductItem;

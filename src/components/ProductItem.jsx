import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class ProductItem extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <MDBNavLink to={"/product/" + this.props.data.product_code}>
            <div class="view overlay">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="card-img-top" alt="" />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body text-center">
              <a href="" class="grey-text">
                <h5>{this.props.data.brand.brand_name}</h5>
              </a>
              <h5>
                <strong>
                  <a href="" class="dark-grey-text">{this.props.data.product_name}</a>
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

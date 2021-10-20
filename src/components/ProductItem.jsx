import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class ProductItem extends Component {

  render() {
    var image = (<img src="/assets/image/NoImage.png" class="card-img-top" alt="" />)
    if (this.props.data.images.length > 0) {
      image = (
        <img src={process.env.REACT_APP_BACKEND + "images/" + this.props.data.images[this.props.data.images.length-1]} class="card-img-top" alt="" />
      )
    }
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        {this.props.images}
        <div class="card">
          <MDBNavLink to={"/product/" + this.props.data.product_code}>
            <div class="view overlay">
              {image}
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

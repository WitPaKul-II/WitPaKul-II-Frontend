import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class ProductItem extends Component {

  render() {
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        {this.props.images}
        <div class="card">
          <MDBNavLink to={"/product/" + this.props.data.product_code}>
            <div class="view overlay">
              <img src={"http://168.63.213.234/backendimages/" + this.props.data.images[0].substring(this.props.data.images[0].lastIndexOf('/')+1, this.props.data.images[0].length)} class="card-img-top" alt="" />
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

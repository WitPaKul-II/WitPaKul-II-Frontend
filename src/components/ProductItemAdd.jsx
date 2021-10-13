import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class ProductItemAdd extends Component {

  render() {
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        {this.props.images}
        <div class="card">
          <MDBNavLink to={"/addproduct/"}>
            <div class="view overlay">
              <img src="/assets/image/AddProduct.png" class="card-img-top" alt="" />
              <div class="mask rgba-white-slight"></div>
            </div>
            <div class="card-body text-center">
              <h5>
                <div class="grey-text">&nbsp;</div>
              </h5>
              <h5>
                  <div class="dark-grey-text">Click here to add product</div> 
              </h5>
              <h4 class="font-weight-bold blue-text">
                <strong>&nbsp;</strong>
              </h4>
            </div>
          </MDBNavLink>
        </div>
      </div>
    );
  }
}

export default ProductItemAdd;

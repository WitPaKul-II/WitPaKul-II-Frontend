import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class ProductItemAdd extends Component {

  render() {
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        {this.props.images}
        <div className="card">
          <MDBNavLink to={"/addproduct/"}>
            <div className="view overlay">
              <img src="/assets/image/AddProduct.png" className="card-img-top" alt="" />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body text-center">
              <h5>
                <div className="grey-text">&nbsp;</div>
              </h5>
              <h5>
                  <div className="dark-grey-text">Click here to add product</div> 
              </h5>
              <h4 className="font-weight-bold blue-text">
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

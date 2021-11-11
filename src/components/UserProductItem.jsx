import React, { Component } from 'react';
import { MDBNavLink } from 'mdbreact';

class UserProductItem extends Component {

    render() {
        var image = (<img src="/assets/image/NoImage.png" className="card-img-top" alt="" />)
        if (this.props.data.images.length > 0) {
            image = (
                <img src={process.env.REACT_APP_BACKEND + "images/" + this.props.data.images[this.props.data.images.length - 1]} className="card-img-top" alt="" />
            )
        }
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                {this.props.images}
                <div className="card">
                    <MDBNavLink to={"/userproduct/" + this.props.data.product_code}>
                        <div className="view overlay">
                            {image}
                            <div className="mask rgba-white-slight"></div>
                        </div>
                        <div className="card-body text-center">
                            <h5>
                                <div className="grey-text">{this.props.data.brand.brand_name}</div>
                            </h5>
                            <h5>
                                <strong>
                                    <div className="dark-grey-text">{this.props.data.product_name}</div>
                                </strong>
                            </h5>
                            <h4 className="font-weight-bold blue-text">
                                <strong>฿{this.props.data.price}</strong>
                            </h4>
                        </div>
                    </MDBNavLink>
                </div>
            </div>
        );
    }
}

export default UserProductItem;

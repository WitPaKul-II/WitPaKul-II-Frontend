import axios from 'axios';
import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import ProductItem from '../components/ProductItem';
import AddBrand from '../views/AddBrand';
import { Redirect, Link } from 'react-router-dom';
class BrandItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        const product_url = process.env.REACT_APP_BACKEND + 'brands/findAll';
    }
    render() {

        return (
            <MDBContainer breakpoint="md" >
                <div className="p-5">
                    <section className="text-center mb-4">
                        {/* <div className="row wow fadeIn"> */}
                        <h1>BRAND</h1>
                        <Link to="/addbrand" className="btn btn-sm btn-success mb-2">Add Brand</Link>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>Brand Id</th>
                                    <th style={{ width: '30%' }}>Brand Name</th>
                                    <th style={{ width: '30%' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>rew</td>
                                    <td>toy</td>
                                    <td>
                                        <Link to="editbrand" className="btn btn-sm btn-primary mr-1">Edit</Link>
                                        <button className="btn btn-sm btn-danger btn-delete-user" >Edit</button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* </div> */}
                    </section>
                </div>
            </MDBContainer>
        );
    }
}

export default BrandItem;

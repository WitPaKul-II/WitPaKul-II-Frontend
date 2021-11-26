import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn } from 'mdbreact';

class AddBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand_name: ""
    };
    this.handleBrandNameChange = this.handleBrandNameChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.required = this.required.bind(this)
  }
  handleBrandNameChange(event) {
    var { brand_name } = this.state;
    if (event.target.value !== "") {
      brand_name = event.target.value
      this.setState({ brand_name: brand_name })
    }
  }
  required(value) {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Fill out the information completely!
        </div>
      );
    }
  };
  handleAdd(event) {
    var { brand_name } = this.state;
    var token = localStorage.getItem("token");
    axios.post(
      process.env.REACT_APP_BACKEND + "brands/addbrand",
      JSON.stringify({ brand_name: brand_name }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then(response => {
      console.log(response)
      window.location.href = "/brand";
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    var { brand_name } = this.state;
    return (
      <div>
        <Navbar />
        <section className="text-center ">
          <div className="container px-4 px-lg-5 my-5 ">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-12">
                <h1>New Brand</h1>
                  <div className="form-group labelblock">
                  <input
                    value={this.state.brand_name}
                    onChange={this.handleBrandNameChange}
                    type="text"
                    name="BrandName"
                    validations={this.required}
                  />
                </div>
                <div className="">
                <MDBBtn color="blue" onClick={this.handleAdd} >Add Brand</MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footerbar />
      </div>
    );
  }
}

export default AddBrand;
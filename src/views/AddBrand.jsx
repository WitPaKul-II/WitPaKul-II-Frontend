import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBInput } from 'mdbreact';

class AddBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand_name: "",
      // mail_name: "",
      error_messages: ""
    };
    this.handleBrandNameChange = this.handleBrandNameChange.bind(this)
    // this.handleMailNameChange = this.handleMailNameChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleBrandNameChange(event) {
    var { brand_name } = this.state
    brand_name = event.target.value
    this.setState({ brand_name: brand_name })
  }
  // handleMailNameChange(event) {
  //   var { mail_name } = this.state
  //   mail_name = event.target.value
  //   this.setState({ mail_name: mail_name })
  // }
  handleAdd(event) {
    // var { brand_name, mail_name } = this.state;
    var { brand_name } = this.state;

    var error_messages = [];
    if (brand_name === "") {
      error_messages.push("Please fill brand name")
    }
    // if (mail_name === "") {
    //   error_messages.push("Please fill email name")
    // }
    if (error_messages.length !== 0) {
      this.setState({ error_messages: error_messages })
      return
    }

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
    var { error_messages } = this.state;
    var error_label = (
      <div></div>
    )
    if (error_messages.length !== 0) {
      error_label = error_messages.map((msg, index) => <div className="alert alert-danger" role="alert">{msg}</div>)
    }
    return (
      <div>
        <Navbar />
        <section className="text-center ">
          <div className="container px-4 px-lg-5 my-5 ">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-12">
                <h1>New Brand</h1>
                <div className="form-group labelblock">
                  <MDBInput type="textarea" label="NewBrandName" background value={this.state.brand_name}
                    onChange={this.handleBrandNameChange} />
                  {/* <input
                    value={this.state.mail_name}
                    onChange={this.handleMailNameChange}
                    type="text"
                    name="MailName"
                  /> */}
                  {error_label}
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
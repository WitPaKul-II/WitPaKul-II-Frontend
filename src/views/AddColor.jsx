import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBInput } from 'mdbreact';

class AddColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color_name: "",
      color_code: "#",
      error_message: ""
    };
    this.handleColorNameChange = this.handleColorNameChange.bind(this)
    this.handleColorCodeChange = this.handleColorCodeChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleColorNameChange(event) {
    var { color_name } = this.state;
    color_name = event.target.value
    this.setState({ color_name: color_name })
  }
  handleColorCodeChange(event) {
    var { color_code } = this.state;
    color_code = event.target.value
    this.setState({ color_code: color_code })
  }
  handleAdd(event) {
    var { color_name, color_code } = this.state;
    var token = localStorage.getItem("token");
    if (color_name === "" || color_code === "") {
      this.setState({"error_message": "Invalid input"})
    }
    axios.post(
      process.env.REACT_APP_BACKEND + "colors/addcolors",
      JSON.stringify({ 
        color_name: color_name,
        color_code: color_code 
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then(response => {
      console.log(response)
      window.location.href = "/color";
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    var { error_message } = this.state;
    var error_label = error_message === "" ? (<div></div>) : (
    <div className="alert alert-danger" role="alert">
      {error_message}
    </div>)
    return (
      <div>
        <Navbar />
        <section className="text-center ">
          <div className="container px-4 px-lg-5 my-5 ">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-12">
                <h1>New Color</h1>
                  <div className="form-group labelblock">
                  <h1 className="display-5 fw-bolder text-black">
                    <MDBInput label="Color Name" background size="lg" value={this.state.color_name} onChange={this.handleColorNameChange} />
                    <MDBInput label="Color Code" background size="lg" value={this.state.color_code} onChange={this.handleColorCodeChange} />
                  </h1>
                </div>                
                <div className="">
                  {error_label}
                  <MDBBtn color="default" onClick={this.handleAdd} >Add Color</MDBBtn>
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

export default AddColor;
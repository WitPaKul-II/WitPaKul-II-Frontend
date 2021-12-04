import axios from 'axios';
import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import DatePicker from 'react-datepicker';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';

class EditColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        color_id: -1,
        color_name: "",
        color_code: ""
      },
      error_message: ""
    };
    this.handleColorNameChange = this.handleColorNameChange.bind(this)
    this.handleColorCodeChange = this.handleColorCodeChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleColorNameChange(event) {
    var { color } = this.state
    color.color_name = event.target.value
    this.setState({ color: color })
  }
  handleColorCodeChange(event) {
    var { color } = this.state
    color.color_code = event.target.value
    this.setState({ color: color })
  }
  handleSave(event) {
    var token = localStorage.getItem("token");  
    if (this.state.color.color_name === "" || this.state.color.color_code === "") {
      this.setState({ "error_message": "Invalid value" })
      return
    }
    axios.put(
      process.env.REACT_APP_BACKEND + "colors/edit", 
      JSON.stringify(this.state.color), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then(response => {
      window.location.href = "/color";
    }).catch(error => {
      this.setState({"error_message": "Invalid value"})
      console.log(error)
    });
  }
  handleCancel(event) {
    window.location.href = "/color";
  }
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const id = query.get('id')
    const color_url = process.env.REACT_APP_BACKEND + 'colors/' + id;
    var token = localStorage.getItem("token");
    axios.get(color_url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then(color_res => {
        console.log(color_res.data)
        this.setState({
          color: color_res.data
        })
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
          <section>
            <div className="pt-5 px-5">
              <h1>Edit Color</h1>
            </div>
            <div className="px-5">
              <h5>
              Color ID {this.state.color.color_id}
              </h5>
              <h1 className="display-5 fw-bolder text-black">
                <MDBInput label="Color Name" background size="lg" value={this.state.color.color_name} onChange={this.handleColorNameChange} />
                <MDBInput label="Color Code" background size="lg" value={this.state.color.color_code} onChange={this.handleColorCodeChange} />
              </h1>
            </div>
            {error_label}
            <div className="px-5">
              <MDBBtn color="default" onClick={this.handleSave} >
                Save
              </MDBBtn>
              <MDBBtn color="danger" onClick={this.handleCancel} >
                Cancel
              </MDBBtn>
            </div>
          </section>
        <Footerbar />
      </div>
    );
  }
}


export default EditColor;

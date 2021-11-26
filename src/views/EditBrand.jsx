import axios from 'axios';
import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import DatePicker from 'react-datepicker';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';

class EditBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: {
        brand_id: -1,
        brand_name: ""
      }
    };
    this.handleBrandNameChange = this.handleBrandNameChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleBrandNameChange(event) {
    var { brand } = this.state
    brand.brand_name = event.target.value
    this.setState({ brand: brand })
  }
  handleSave(event) {
    var token = localStorage.getItem("token");  
    console.log(JSON.stringify(this.state.brand))
    axios.put(
      process.env.REACT_APP_BACKEND + "brands/edit", 
      JSON.stringify(this.state.brand), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then(response => {
      window.location.href = "/brand";
    }).catch(error => {
      console.log(error)
    });
  }
  handleCancel(event) {
    window.location.href = "/brand";
  }
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const id = query.get('id')
    const brand_url = process.env.REACT_APP_BACKEND + 'brands/' + id;
    var token = localStorage.getItem("token");
    axios.get(brand_url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then(brand_res => {
        console.log(brand_res.data)
        this.setState({
          brand: brand_res.data
        })
      });
  }
  render() {
    return (
      <div>
        <Navbar />
          <section>
            <div className="pt-5 px-5">
              <h1>Edit Brand</h1>
            </div>
            <div className="px-5">
              <h5>
              Brand ID {this.state.brand.brand_id} 
                <MDBInput type="textarea" label="BrandName" background value={this.state.brand.brand_name} onChange={this.handleBrandNameChange} />
              </h5>
            </div>
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


export default EditBrand;

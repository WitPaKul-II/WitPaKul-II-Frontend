import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from "mdbreact";
import { Redirect, Link } from 'react-router-dom';
class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      data: {
        "brand_id": "",
        "brand_name": "",
      },
    };
    // this.handleEdit = this.handleEdit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  // handleEdit() {
  //   var { data } = this.state;

  //   window.location.href = "/pros?id=" + data.brand_id;
  // }
  handleAdd(event) {

    window.location.href = "/addbrand";
  }

  handleDelete(brand_id) {
    var token = localStorage.getItem("token");
    if (window.confirm('Are you sure you wish to delete ?')) {
      axios.delete(
        process.env.REACT_APP_BACKEND + "brands/" + "delete/" + brand_id,
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
  }

  componentWillMount() {
    const brands_url = process.env.REACT_APP_BACKEND + 'brands/findAll';
    var token = localStorage.getItem("token");
    axios.get(brands_url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then(brands_res => {
        console.log(brands_res.data)
        this.setState({
          brands: brands_res.data
        })
      });
  }
  render() {
    var brands = this.state.brands.map((brand) =>
      <tr>
        <td>{brand.brand_id}</td>
        <td>{brand.brand_name}</td>
        <td>
          {/* <MDBBtn color="blue" onClick={() => this.handleEdit(brand.brand_id)} >Edit</MDBBtn> */}
          <MDBBtn color="blue" href={"/edit?id=" + brand.brand_id}>Edit</MDBBtn>
          <MDBBtn color="danger" onClick={() => this.handleDelete(brand.brand_id)}>
            <MDBIcon icon="trash" />
          </MDBBtn>
        </td>
      </tr>
    );
    return (

      <div>
        <Navbar />
        <div className="p-5">
          <section className="text-center mb-4">
            <div>
              <h1>BRAND</h1>
              <MDBBtn color="default" onClick={this.handleAdd} >Add Brand</MDBBtn>
            </div>
            <MDBTable striped>
              <MDBTableHead>
                <tr>
                  <th>Brand ID </th>
                  <th>Brand Name</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {brands}
              </MDBTableBody>
            </MDBTable>
          </section>
        </div>
        <Footerbar />
      </div>
    );
  }
}

export default Brand;

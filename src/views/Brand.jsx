import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from "mdbreact";


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
    this.handleAdd = this.handleAdd.bind(this)
  }
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
          <MDBBtn color="blue" href={"/editbrand?id=" + brand.brand_id}>Edit</MDBBtn>
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
          <section className="mb-4">
            <div class="row">
              <div class="col-auto mr-auto">
                <h1>BRAND</h1>
              </div>
              <div class="col-auto">
                <MDBBtn color="default" onClick={this.handleAdd}>Add Brand</MDBBtn>
              </div>
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

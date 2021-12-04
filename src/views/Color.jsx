import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from "mdbreact";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      data: {
        "color_id": "",
        "color_name": "",
        "color_code": "",
      },
    };
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(event) {
    window.location.href = "/addcolor";
  }
  handleDelete(color_id) {
    var token = localStorage.getItem("token");
    if (window.confirm('Are you sure you wish to delete ?')) {
      axios.delete(
        process.env.REACT_APP_BACKEND + "colors/" + "delete/" + color_id,
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
  }

  componentWillMount() {
    const colors_url = process.env.REACT_APP_BACKEND + 'colors/findAll';
    var token = localStorage.getItem("token");
    axios.get(colors_url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then(colors_res => {
        console.log(colors_res.data)
        this.setState({
          colors: colors_res.data
        })
      });
  }
  render() {
    var colors = this.state.colors.map((color) =>
      <tr>
        <td>{color.color_id}</td>
        <td>{color.color_name}</td>
        <td>{color.color_code}</td>
        <td>
          <MDBBtn color="blue" href={"/editcolor?id=" + color.color_id}>Edit</MDBBtn>
          <MDBBtn color="danger" onClick={() => this.handleDelete(color.color_id)}>
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
                <h1>COLOR</h1>
              </div>
              <div class="col-auto">
                <MDBBtn color="default" onClick={this.handleAdd}>Add Color</MDBBtn>
              </div>
            </div>
            <MDBTable striped>
              <MDBTableHead>
                <tr>
                  <th>Color ID</th>
                  <th>Color Name</th>
                  <th>Color Code</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {colors}
              </MDBTableBody>
            </MDBTable>
          </section>
        </div>
        <Footerbar />
      </div>
    );
  }
}

export default Color;

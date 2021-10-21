import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBIcon } from "mdbreact";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        "product_code": "",
        "product_name": "",
        "product_description": "",
        "price": "0",
        "manufactured_date": "",
        "amount": 0,
        "brand": { "brand_id": "", "brand_name": "" },
        "colors": [],
        "images": [],
      },
      selectedColors: []
    };
  }
  componentDidMount() {
    const url = process.env.REACT_APP_BACKEND + 'productcode/' + this.props.match.params[0];
    axios.get(url).then(res => {
      var selectedColors = {}
      for (var i = 0; i < res.data.colors.length; i++) {
        selectedColors[res.data.colors[i].color_name] = false;
      }

      const product_images_url = process.env.REACT_APP_BACKEND + 'productImages/findAll/';
      axios.get(product_images_url).then(product_images_res => {
        // Set product code to string
        for (var i = 0; i < product_images_res.data.length; i++) {
          product_images_res.data[i].product_code = product_images_res.data[i].product_code.product_code
        }

        // Initial images to each item
        res.data.images = []

        // Push images to item
        for (var k = 0; k < product_images_res.data.length; k++) {
          if (res.data.product_code === product_images_res.data[k].product_code) {
            res.data.images.push(product_images_res.data[k].image_url)
          }
        }

        this.setState({
          data: res.data,
          selectedColors: selectedColors
        });
      });

    });
  }
  handleColor(color) {
    var { selectedColors } = this.state;
    selectedColors[color.color_name] = !this.state.selectedColors[color.color_name];
    this.setState({
      selectedColors: selectedColors
    });
  }
  handleDelete(event){
    var { data } = this.state;
    if (window.confirm('Are you sure you wish to delete this item?')) {
      axios.delete(
        process.env.REACT_APP_BACKEND + "delete/" + data.product_code,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        console.log(response)
        window.location.href = "/shop";
      }).catch(error => {
        console.log(error.response.data)
      });
    }
  }
  isActive(color_name) {
    var { selectedColors } = this.state;
    return ((selectedColors[color_name]) ? 'active' : 'default');
  }
  render() {
    var { data } = this.state;
    var colors = [];

    for (var i = 0; i < data.colors.length; i++) {
      colors.push(
        <MDBBtn
          key={data.colors[i].color_id}
          className={this.isActive(data.colors[i].color_name)}
          color={data.colors[i].color_name.toLowerCase()} onClick={this.handleColor.bind(this, data.colors[i])}
        ></MDBBtn>
      );
    }

    var images_comp = (
      <img class="card-img-top mb-5 mb-md-0" src="/assets/image/NoImage.png" alt="..." />
    )
    if (data.images.length > 0) {
      images_comp = (
        <img class="card-img-top mb-5 mb-md-0" src={process.env.REACT_APP_BACKEND + "images/" + data.images[0].substring(data.images[0].lastIndexOf('/') + 1, data.images[0].length)} alt="..." />
      )
    }

    return (
      <div>
        <Navbar />
        <section class="py-5">
          <div class="container px-4 px-lg-5 my-5 ">
            <div class="row gx-4 gx-lg-5 align-items-center">
              <div class="col-md-6">
                {images_comp}
              </div>
              <div class="col-md-6">
                <div class="mb-1 fw-bolder">{data.brand.brand_name}</div>
                <h1 class="display-5 fw-bolder text-black">{data.product_name}</h1>
                <div class="mb-1 ">{data.manufactured_date}</div>
                <p class="lead">
                  {data.product_description}
                </p>
                <div class="d-flex align-items-center mt-2 mb-2 fw-bolder"> <span>Colors</span>
                  {colors}
                </div>
                <div class="fs-5 mb-5 fw-bolder text-warning">
                  <div className="float-left">
                    <h4 class="font-weight-bold blue-text">
                      <strong>฿{data.price}</strong>
                    </h4>
                  </div>
                  <div className="float-right">
                    <MDBBtn color="danger" onClick={ this.handleDelete.bind(this) } >
                      <MDBIcon icon="trash" />
                    </MDBBtn>
                    <MDBBtn color="primary">
                      Add to cart
                    </MDBBtn>
                  </div>
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

export default Product;

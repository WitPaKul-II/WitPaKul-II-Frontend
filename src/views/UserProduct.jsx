import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn } from "mdbreact";

class UserProduct extends Component {
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
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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
  handleEdit(event) {
    var { data } = this.state;

    window.location.href = "/editproduct/" + data.product_code;
  }
  handleDelete(event) {
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
        console.log(error)
      });
    }
  }
  isActive(color_name) {
    var { selectedColors } = this.state;
    return ((selectedColors[color_name]) ? '2px solid' : '');
  }
  render() {
    var { data } = this.state;
    var colors_list = [];

    for (var i = 0; i < data.colors.length; i++) {
      colors_list.push(
        <button
          key={data.colors[i].color_id}
          className={"btn Ripple-parent default"}
          style={{
              "background-color": data.colors[i].color_code,
              "outline": this.isActive(data.colors[i].color_name)
          }}
          onClick={this.handleColor.bind(this, data.colors[i])}
        ></button>
      );
    }
    var colors = (<div></div>)
    if (colors_list.length !== 0) {
      colors = (
      <div className="row d-flex align-items-center m-2 fw-bolder">
        <div className="mr-4">Colors</div>
        <div className="row">
          {colors_list}
        </div>
      </div>
      )
    }

    var images_comp = (
      <img class="card-img-top mb-5 mb-md-0" src="/assets/image/NoImage.png" alt="..." />
    )
    if (data.images.length > 0) {
      images_comp = (
        <img class="card-img-top mb-5 mb-md-0" src={process.env.REACT_APP_BACKEND + "images/" + data.images[data.images.length - 1]} alt="..." />
      )
    }

    return (
      <div>
        <Navbar />
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5 ">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                {images_comp}
              </div>
              <div className="col-md-6">
                <div className="mb-1 fw-bolder">{data.brand.brand_name}</div>
                <h1 className="display-5 fw-bolder text-black">{data.product_name}</h1>
                <div className="mb-1">{data.manufactured_date}</div>
                <div className="mb-1 text-weight-lighter"><small>{data.amount} left in stock</small></div>
                <p className="lead">
                  {data.product_description}
                </p>
                {colors}
                <div className="fs-5 mb-5 fw-bolder text-warning">
                  <div className="float-left">
                    <h4 className="font-weight-bold blue-text">
                      <strong>฿{data.price}</strong>
                    </h4>
                  </div>
                  <div className="float-right">
                    {/* <MDBBtn color="default">
                      Add to cart
                    </MDBBtn> */}
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

export default UserProduct;

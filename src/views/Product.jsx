import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn } from 'mdbreact';

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
        "colors": [] 
      },
      selectedColors: []
    };
  }
  componentWillMount() {
    const url = 'http://168.63.213.234:4000/productcode/' + this.props.match.params[0];
    axios.get(url).then(res => {
      var selectedColors = {}
      for (var i=0; i<res.data.colors.length; i++) {
        selectedColors[res.data.colors[i].color_name] = false;
      }
      this.setState({
        data: res.data,
        selectedColors: selectedColors
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
  isActive(color_name) {
    var { selectedColors } = this.state;
    return ((selectedColors[color_name]) ?'active':'default');
  }
  render() {
    var { data } = this.state;
    var colors = [];
    for (var i=0; i<data.colors.length; i++) {
      colors.push(
        <MDBBtn 
          key={data.colors[i].color_id}
          className={this.isActive(data.colors[i].color_name)}
          color={data.colors[i].color_name.toLowerCase()} onClick={this.handleColor.bind(this, data.colors[i])}
        ></MDBBtn>
      );
    }
    return (
      <div>
        <Navbar />
        <section class="py-5">
          <div class="container px-4 px-lg-5 my-5 ">
            <div class="row gx-4 gx-lg-5 align-items-center">
              <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/300x300/" alt="..." /></div>
              <div class="col-md-6">
                <div class="mb-1 fw-bolder">{data.brand.brand_name}</div>
                <h1 class="display-5 fw-bolder text-black">{data.product_name}</h1>
                <div class="mb-1 ">{data.manufactured_date}</div>
                <p class="lead">
                  {data.product_description}
                </p>
                <div class="d-flex  align-items-center mt-2 mb-2 fw-bolder"> <span>Colors</span>
                  {colors}
                </div>
                <div class="fs-5 mb-5 d-flex align-items-center fw-bolder text-warning justify-content-between ">
                  
                  <h4 class="font-weight-bold blue-text">
                    <strong>฿{data.price}</strong>
                  </h4>
                  <button class=" btn btn-primary btn-lg flex-shrink-0" type="button">
                    <i class="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
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

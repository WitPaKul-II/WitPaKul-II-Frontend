import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBInput } from 'mdbreact';
import DatePicker from 'react-datepicker';

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
        "images": [] 
      },
      imageFile: null,
      brands: [],
      selectedColors: []
    };
    this.handleBrandChange = this.handleBrandChange.bind(this)
    this.handleProductNameChange = this.handleProductNameChange.bind(this)
    this.handleManufacturedDateChange = this.handleManufacturedDateChange.bind(this)
    this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleImageFileChange = this.handleImageFileChange.bind(this)
  }
  handleBrandChange(event) {
    var { data } = this.state;
    data.brand.brand_id = event.target.value
    data.brand.brand_name = event.target[event.target.selectedIndex].text
    this.setState({data: data})
  }
  handleProductNameChange(event) {
    var { data } = this.state
    data.product_name = event.target.value
    this.setState({data: data})
  }
  handleManufacturedDateChange(value) {
    var { data } = this.state
    data.manufactured_date = value
    this.setState({data: data})
  }
  handleProductDescriptionChange(event) {
    var { data } = this.state
    data.product_description = event.target.value
    this.setState({data: data})
  }
  handlePriceChange(event) {
    var { data } = this.state
    data.price = event.target.value
    this.setState({data: data})
  }
  handleImageFileChange(event) {
    this.setState({imageFile: URL.createObjectURL(event.target.files[0])})
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
  componentDidMount() {
    // const url = 'http://shops.witpakulii.de/backendproductcode/' + this.props.match.params[0];
    // axios.get(url).then(res => {
    //   var selectedColors = {}
    //   for (var i=0; i<res.data.colors.length; i++) {
    //     selectedColors[res.data.colors[i].color_name] = false;
    //   }
    //   const product_images_url = 'http://shops.witpakulii.de/backendproductImages/findAll/';
    //   axios.get(product_images_url).then(product_images_res => {
    //     // Set product code to string
    //     for(var i = 0; i < product_images_res.data.length; i++) {
    //       product_images_res.data[i].product_code = product_images_res.data[i].product_code.product_code
    //     }
    //     // Initial images to each item
    //     res.data.images = []

    //     // Push images to item
    //     for(var k = 0; k < product_images_res.data.length; k++) {
    //       if (res.data.product_code === product_images_res.data[k].product_code) {
    //         res.data.images.push(product_images_res.data[k].image_url)
    //       }          
    //     }
        
    //     this.setState({
    //       data: res.data,
    //       selectedColors: selectedColors
    //     });
    //   });
    // });

    const brands_url = "http://shops.witpakulii.de/backendbrands/"
    axios.get(brands_url).then(res => {
      this.setState({
        brands: res.data.payload
      });
    });

    const colors_url = "http://shops.witpakulii.de/backendcolors/"
    axios.get(colors_url).then(res => {
      var { data } = this.state;
      data.colors = res.data.payload
      data.manufactured_date = new Date()
      this.setState({
        data: data
      });
    });
  }
  render() {
    var { data, brands } = this.state;
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
    var images_comp = (
      <div>
        <img class="card-img-top mb-5 mb-md-0" src={this.state.imageFile} alt="..." />
        <MDBInput type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={this.handleImageFileChange} />
      </div>
    )
    var brands_comp = (
      <div>
        <select value={this.state.data.brand.brand_id} onChange={this.handleBrandChange} >
          {brands.map(({ brand_id, brand_name }, index) => <option value={brand_id}>{brand_name}</option>)}
        </select>
      </div>
    )
    // if (data.images.length !== 0) {
    //   images_comp = (
    //   <img class="card-img-top mb-5 mb-md-0" src={"http://shops.witpakulii.de/backendimages/" + data.images[0].substring(data.images[0].lastIndexOf('/')+1, data.images[0].length)} alt="..." />
    //   )
    // }
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
                <div class="mb-1 fw-bolder">
                  {brands_comp}
                </div>
                <h1 class="display-5 fw-bolder text-black">
                  <MDBInput label="Product Name" background size="lg" value={this.state.data.product_name} onChange={this.handleProductNameChange} />
                </h1>
                <div class="mb-1">
                  <DatePicker selected={this.state.data.manufactured_date} onChange={this.handleManufacturedDateChange} />
                </div>
                <p class="lead">
                  <MDBInput type="textarea" label="Description" background value={this.state.data.product_description} onChange={this.handleProductDescriptionChange} />
                </p>
                <div class="row d-flex align-items-center m-2 fw-bolder">
                  <span>Colors</span>
                  <div class="row">
                    {colors}
                  </div>
                </div>
                <div class="fs-5 mb-5 d-flex align-items-center fw-bolder text-warning justify-content-between ">
                  
                  <h4 class="font-weight-bold blue-text">
                    <strong>
                      <MDBInput type="number" label="Price (฿)" background size="lg" value={this.state.data.price} onChange={this.handlePriceChange} />
                    </strong>
                  </h4>
                  <button class=" btn btn-primary btn-lg flex-shrink-0" type="button">
                    <i class="bi-cart-fill me-1"></i>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        [Debug] <br />
        product_code: {this.state.data.product_code} <br />
        product_name: {this.state.data.product_name} <br />
        product_description: {this.state.data.product_description} <br />
        price: {this.state.data.price} <br />
        {/* manufactured_date: {this.state.data.manufactured_date} <br /> */}
        amount: {this.state.data.amount} <br />
        brand.brand_id: {this.state.data.brand.brand_id} <br />
        brand.brand_name: {this.state.data.brand.brand_name} <br />
        colors.length: {this.state.data.colors.length} <br />
        images: {this.state.data.images} <br />
        <Footerbar />
      </div>
    );
  }
}

export default Product;

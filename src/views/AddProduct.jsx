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
        "_manufactured_date": new Date(), 
        "manufactured_date": "", 
        "amount": 0, 
        "brand": { "brand_id": "", "brand_name": "" }, 
        "colors": [],
        "images": [] 
      },
      imageFileURL: "/assets/image/NoImage.png",
      imageFile: null,
      brands: [],
      selectedColors: []
    };
    this.handleBrandChange = this.handleBrandChange.bind(this)
    this.handleProductCodeChange = this.handleProductCodeChange.bind(this)
    this.handleProductNameChange = this.handleProductNameChange.bind(this)
    this.handleManufacturedDateChange = this.handleManufacturedDateChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleImageFileChange = this.handleImageFileChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleBrandChange(event) {
    var { data } = this.state;
    data.brand.brand_id = event.target.value
    data.brand.brand_name = event.target[event.target.selectedIndex].text
    this.setState({data: data})
  }
  handleProductCodeChange(event) {
    var { data } = this.state
    data.product_code = event.target.value
    this.setState({data: data})
  }
  handleProductNameChange(event) {
    var { data } = this.state
    data.product_name = event.target.value
    this.setState({data: data})
  }
  handleManufacturedDateChange(value) {
    var { data } = this.state
    if (value) {
      data._manufactured_date = value
      data.manufactured_date = data._manufactured_date.toISOString().split("T")[0]
      this.setState({data: data})
    }
  }
  handleProductDescriptionChange(event) {
    var { data } = this.state
    data.product_description = event.target.value
    this.setState({data: data})
  }
  handleImageFileChange(event) {
    this.setState({
      imageFileURL: URL.createObjectURL(event.target.files[0]),
      imageFile: event.target.files[0]
    })
  }
  handleColor(color) {
    var { selectedColors } = this.state;
    if (selectedColors.indexOf(color.color_id) === -1) {
      selectedColors.push(color.color_id)
    }
    else {
      var index = selectedColors.indexOf(color.color_id);
      if (index !== -1) {
        selectedColors.splice(index, 1);
      }
    }
    this.setState({
      selectedColors: selectedColors
    });
  }
  handlePriceChange(event) {
    var { data } = this.state
    if (event.target.value !== "") {
      data.price = event.target.value
      this.setState({data: data})
    }
  }
  handleAmountChange(event){
    var { data } = this.state
    if (event.target.value !== "") {
      data.amount = event.target.value
      this.setState({data: data})
    }
  }
  handleAdd(event) {
    var { data, imageFile, selectedColors } = this.state;
    var colors = []
    for (var i=0; i<data.colors.length; i++) {
      if (selectedColors.indexOf(data.colors[i].color_id) !== -1) {
        colors.push(data.colors[i])
      }
    }
    data.colors = colors;
    axios.post(
      process.env.REACT_APP_BACKEND + "addproductId", 
      JSON.stringify(data), 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      if (imageFile) {
        var formData = new FormData();
        formData.append("image", imageFile);
        axios.post(process.env.REACT_APP_BACKEND + "images", formData, {
          headers: {
            'Content-Type': 'multipart/form-data;charset=utf-8',
            'product_code': data.product_code,
            'filename': data.product_code + "-" + (new Date()).getTime()
          }
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error.response.data)
        });
      }
      window.location.href = "/shop";
    }).catch(error => {
      console.log(error.response.data)
    });
  }
  isActive(color_id, mode) {
    var { selectedColors } = this.state;
    return ((selectedColors.includes(color_id)) ? 'active border border-success' : 'default');
  }
  componentDidMount() {
    const brands_url = process.env.REACT_APP_BACKEND + "brands/findAll"
    axios.get(brands_url).then(res => {
      var { data } = this.state;
      data.brand = res.data[0]
      this.setState({
        data: data,
        brands: res.data
      });
    });

    const colors_url = process.env.REACT_APP_BACKEND + "colors/findAll"
    axios.get(colors_url).then(res => {
      var { data } = this.state;
      data.colors = res.data
      data._manufactured_date = new Date()
      data.manufactured_date = data._manufactured_date.toISOString().split("T")[0]
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
          className={this.isActive(data.colors[i].color_id, "class")}
          color={data.colors[i].color_name.toLowerCase()} onClick={this.handleColor.bind(this, data.colors[i])}
        ></MDBBtn>
      );
    }
    var images_comp = (
      <div>
        <img className="card-img-top mb-5 mb-md-0" src={this.state.imageFileURL} alt="..." />
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
    //   <img className="card-img-top mb-5 mb-md-0" src={"http://shops.witpakulii.de/backendimages/" + data.images[0].substring(data.images[0].lastIndexOf('/')+1, data.images[0].length)} alt="..." />
    //   )
    // }
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
                <div className="mb-1 fw-bolder">
                  {brands_comp}
                </div>
                <h3 className="display-5 fw-bolder text-black w-50">
                  <MDBInput label="Product Code" background value={this.state.data.product_code} onChange={this.handleProductCodeChange} />
                </h3>
                <h1 className="display-5 fw-bolder text-black">
                  <MDBInput label="Product Name" background size="lg" value={this.state.data.product_name} onChange={this.handleProductNameChange} />
                </h1>
                <div className="mb-1">
                  <DatePicker selected={this.state.data._manufactured_date} onChange={this.handleManufacturedDateChange} />
                </div>
                <div>
                  <MDBInput type="textarea" label="Description" background value={this.state.data.product_description} onChange={this.handleProductDescriptionChange} />
                </div>
                <div className="row d-flex align-items-center m-2 fw-bolder">
                  <span>Colors</span>
                  <div className="row">
                    {colors}
                  </div>
                </div>
                <div className="fs-5 d-flex align-items-center fw-bolder text-warning justify-content-between ">
                  <h4 className="font-weight-bold blue-text">
                    <strong>
                      <MDBInput type="number" label="Price (฿)" background size="lg" value={this.state.data.price} onChange={this.handlePriceChange} />
                    </strong>
                  </h4>
                </div>
                <div className="fs-5 mb-5 d-flex align-items-center fw-bolder text-warning justify-content-between ">
                  <h4 className="font-weight-bold blue-text">
                    <strong>
                      <MDBInput type="number" label="Amount" background size="lg" value={this.state.data.amount} onChange={this.handleAmountChange} />
                    </strong>
                  </h4>
                  <button className=" btn btn-primary btn-lg flex-shrink-0" type="button" onClick={this.handleAdd}>
                    <i className="bi-cart-fill me-1"></i>
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

import axios from 'axios';
import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import ProductItem from '../components/ProductItem';

class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    const product_url = 'http://witpakulii.ddns.net/backendfindAll/product';
    axios.get(product_url).then(items_res => {
      const product_images_url = 'http://witpakulii.ddns.net/productImages/findAll/';
      axios.get(product_images_url).then(product_images_res => {
        // Set product code to string
        for(var i = 0; i < product_images_res.data.length; i++) {
          product_images_res.data[i].product_code = product_images_res.data[i].product_code.product_code
        }
        
        // Initial images to each item
        for(var j = 0; j < items_res.data.length; j++) {
          items_res.data[j].images = []
        }

        // Push images to item
        for(var k = 0; k < product_images_res.data.length; k++) {
          var item = items_res.data.filter(obj => obj.product_code === product_images_res.data[k].product_code)[0]
          item.images.push(product_images_res.data[k].image_url)
        }
        
        this.setState({
          items: items_res.data
        });
      });
    });
  }
  render() {
    var { items } = this.state;    
    return (
      <MDBContainer breakpoint="md" >
        <div class="p-5">
          <section class="text-center mb-4">
            <div class="row wow fadeIn">
              {
                Object.keys(items).map(key => (
                  <ProductItem data={items[key]} />
                ))
              }
            </div>
          </section>
        </div>
      </MDBContainer>
    );
  }
}

export default ProductItems;

import axios from 'axios';
import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import ProductItem from '../components/ProductItem';
import ProductItemAdd from '../components/ProductItemAdd';

class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    const product_url = process.env.REACT_APP_BACKEND + 'findAll/product';
    axios.get(product_url).then(items_res => {
      const product_images_url = process.env.REACT_APP_BACKEND + 'productImages/findAll/';
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
        product_images_res.data.forEach(product_image => {
          var item = items_res.data.filter(obj => obj.product_code === product_image.product_code)[0]
          item.images.push(product_image.image_url)
        })
        
        this.setState({
          items: items_res.data
        });
      });
    });
  }
  render() {
    var { items } = this.state;
    const _items = items.filter(
      item => 
        item.product_name.toLowerCase().includes(this.props.searchText.toLowerCase()) || 
        item.brand.brand_name.toLowerCase().includes(this.props.searchText.toLowerCase())
    );
    return (
      <MDBContainer breakpoint="md" >
        <div className="pt-5 px-5">
          Search result(s) of "{this.props.searchText}"
        </div>
        <div className="p-5">
          <section className="text-center mb-4">
            <div className="row wow fadeIn">
            <ProductItemAdd />
            {
              Object.keys(_items).map(key => (
                <ProductItem data={_items[key]} />
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

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
    const url = 'http://168.63.213.234:4000/findall/product';
    axios.get(url).then(res => {
      this.setState({
        items: res.data
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

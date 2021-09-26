import axios from 'axios';
import React, { Component } from 'react';
import { MDBContainer, MDBNavLink } from 'mdbreact';
import ProductItem from '../components/ProductItem';

class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    const url = 'http://168.63.213.234:4000/findall/product';
    axios.get(url).then(res => {
      console.log(res);
      this.setState({
        isLoaded: true,
        items: res.data
      });
    });
  }
  render() {
    var { isLoaded, items } = this.state;
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

          <nav class="d-flex justify-content-center wow fadeIn">
            <ul class="pagination pg-blue">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>

              <li class="page-item active">
                <a class="page-link" href="#">1
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </MDBContainer>
    );
  }
}

export default ProductItems;

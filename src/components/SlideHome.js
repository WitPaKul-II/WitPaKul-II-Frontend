import React, { Component } from 'react';

class SlideHome extends Component {
  render() {
    return (
      <div id="carouselslidehome" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-mdb-target="#carouselslidehome" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="SlideHome1"></button>
          <button type="button" data-mdb-target="#carouselslidehome" data-mdb-slide-to="1" aria-label="SlideHome2" ></button>
          <button type="button" data-mdb-target="#carouselslidehome" data-mdb-slide-to="2" aria-label="SlideHome3" ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://dummyimage.com/1600x500/" class="d-block w-100 text-pri" alt="..." />
            <div class="carousel-caption d-none d-md-block  ">
              <h5>First slide label</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img src="/assets/image/testOk.png" class="d-block w-100 text-" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/1600x500/" class="d-block w-100 " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>

            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselslidehome" data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden text-da">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselslidehome" data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    );
  }
}

export default SlideHome;

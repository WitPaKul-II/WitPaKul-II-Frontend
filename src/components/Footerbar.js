import React, { Component } from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

class Footerbar extends Component {
  render() {
    return (
      <footer class="bg-transparent text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a
              class="btn rounded m-1"
              style={{ "background-color": "#3b5998" }}
              href="https://web.facebook.com/PRISMAPage"
              role="button">
              <i class="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a 
              class="btn btn-floating btn-rounded m-1"
              style={{ "background-color": "#55acee" }}
              href="https://twitter.com/PRISMA_Circle"
              role="button">
              <i class="fab fa-twitter"></i>
            </a>

            {/* <!-- Github --> */}
            <a 
              class="btn btn-floating btn-rounded m-1"
              style={{ "background-color": "#333333" }}
              href="https://github.com/WitPaKul-II"
              role="button">
              <i class="fab fa-github"></i>
            </a>
          </section>

        </div>
        {/* <!-- Copyright --> */}
        {/* <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"> */}
        <div class="text-center font-weight-light p-3 teal lighten-3">
          © 2021 Copyright:
          <a class="text-white font-weight-light" href="https://www.youtube.com/watch?v=QhBnZ6NPOY0"> WitPaKul Shop II</a>
        </div>
      </footer>
    );
  }
}

export default Footerbar;

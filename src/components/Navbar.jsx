import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline
} from "mdbreact";

class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchText: ''
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleSearchChange = (event) =>  {
    this.setState({ searchText: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    var search = <div/>
    if (this.props.search) {
      search = (
        <MDBNavItem >
          <MDBFormInline waves>
            <div className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={this.state.searchText} onChange={this.handleSearchChange} />
            </div>
          </MDBFormInline>
        </MDBNavItem>
      );
    }
    return (
      <div>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <MDBNavLink to="/">
              <img src="/assets/image/Among2.png" style={{ height: "35px" }} alt="" loading="lazy" />
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/team">TEAM</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/shop">SHOP</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {search}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right className="dropdown-default">
                    <MDBNavLink to="signin"><MDBDropdownItem>Login</MDBDropdownItem></MDBNavLink>
                    <MDBDropdownItem href="/profile">Settings</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Navbar;

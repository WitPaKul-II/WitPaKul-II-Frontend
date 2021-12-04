import React, { useEffect, useCallback, useState } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline
} from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import EventBus from "../store/common/EventBus";
import { logout } from "../store/actions/auth";
import { clearMessage } from "../store/actions/message";
import { history } from "../store/helpers/history";

const Navbar = (props) => {

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [ShowUsersBoard, setShowUsersBoard] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
    if (props.onChange) {
      props.onChange(event);
    }
  }

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      // clear message when changing location
      dispatch(clearMessage());
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {

    if (currentUser) {
      setShowUsersBoard(currentUser.user_type.type_name === "Customer");
      setShowAdminBoard(currentUser.user_type.type_name === "Admin1");
    } else {
      setShowAdminBoard(false);
      setShowUsersBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  var search = <div />
  if (props.search) {
    search = (
      <MDBNavItem >
        <MDBFormInline waves>
          <div className="md-form my-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={searchText} onChange={handleSearchChange} />
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
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/team">TEAM</MDBNavLink>
            </MDBNavItem>
            <div>
              <MDBNavItem>
                <MDBNavLink to="/shop">SHOP</MDBNavLink>
              </MDBNavItem>
            </div>
            {/* {currentUser.user_type.type_name === "Admin1" && ( */}
            {showAdminBoard && (
              <div>
                <MDBNavItem>
                  <MDBNavLink to="/users">USERS</MDBNavLink>
                </MDBNavItem>
              </div>
            )}
            {/* )} */}
            {showAdminBoard && (
              <div>
                <MDBNavItem>
                  <MDBNavLink to="/brand">BRAND</MDBNavLink>
                </MDBNavItem>
              </div>
            )}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {search}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right className="dropdown-default">
                  {currentUser ? (
                    <div >
                      <MDBNavLink to="/profile" className="nav-link"><MDBDropdownItem>
                        {currentUser.username}
                      </MDBDropdownItem></MDBNavLink>
                      <MDBNavLink to="/login" className="nav-link" onClick={logOut}><MDBDropdownItem>
                        Sign Out
                      </MDBDropdownItem></MDBNavLink>
                    </div>
                  ) : (
                    <div>
                      <MDBNavLink to="/login"><MDBDropdownItem>Sign In</MDBDropdownItem></MDBNavLink>
                      <MDBNavLink to="/register"><MDBDropdownItem>Sign Up</MDBDropdownItem></MDBNavLink>
                    </div>
                  )}
                  <MDBDropdownItem href="#!">Settings</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;

import React, { useState, useEffect, } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from "react-redux";
import ProductItems from '../components/ProductItems';
import Footerbar from '../components/Footerbar';
import UserProductItems from '../components/UserProductItems';

const Shop = (props) => {
  // Admin & Users
  const [ShowUsersBoard, setShowUsersBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      setShowUsersBoard(currentUser.user_type.type_name === "Customer");
      setShowAdminBoard(currentUser.user_type.type_name === "Admin1");
    } else {
      setShowAdminBoard(false);
      setShowUsersBoard(false);
    }
  }, [currentUser]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div>
      <Navbar search={true} onChange={handleSearchChange} />
      {showAdminBoard && (
        <ProductItems searchText={searchText} />
      )}
      {ShowUsersBoard && (
        <UserProductItems searchText={searchText} />
      )}
      <UserProductItems searchText={searchText} />
      <Footerbar />
    </div>
  );
}
export default Shop;

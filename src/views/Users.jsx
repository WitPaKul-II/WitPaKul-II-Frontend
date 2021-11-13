import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentWillMount() {
    const users_url = process.env.REACT_APP_BACKEND + 'users/findAll';
    var token = localStorage.getItem("token");
    axios.get(users_url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).then(users_res => {
      console.log(users_res.data)
      this.setState({
        users: users_res.data
      })
    });
  } 
  render() {
    var users = this.state.users.map((user) => 
      <tr>
        <td>{user.user_id}</td>
        <td>{user.username}</td>
        <td>********</td>
        <td>{user.email}</td>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.birth_date}</td>
        <td>{user.tel}</td>
        <td>{user.user_type.type_id} {user.user_type.type_name}</td>
        <td><MDBBtn color="default" href={"/profile?id=" + user.user_id}>View/Edit</MDBBtn></td>
      </tr>  
    );
    return (
      <div>
        <Navbar />
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th>ID #</th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>Phone</th>
              <th>Type</th>
              <th></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {users}
          </MDBTableBody>
        </MDBTable>
        <Footerbar />
      </div>
    );
  }
}

export default Users;

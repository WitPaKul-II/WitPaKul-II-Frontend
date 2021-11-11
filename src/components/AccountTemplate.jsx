import axios from 'axios';
import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import DatePicker from 'react-datepicker';

class AccountTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      imageFileURL: "/assets/image/NoImage.png",
      imageFile: null,
      editUser: {},
      editFlag: false
    };
    this.handleImageFileChange = this.handleImageFileChange.bind(this)
    this.handleEditProfile = this.handleEditProfile.bind(this)
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this)
    this.handleLastnameChange = this.handleLastnameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTelChange = this.handleTelChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleImageFileChange(event) {
    this.setState({
      imageFileURL: URL.createObjectURL(event.target.files[0]),
      imageFile: event.target.files[0]
    })
  }
  handleEditProfile() {
    var { user } = this.state;
    this.setState({
      editUser: {...user},
      editFlag: true
    });
  }
  handleFirstnameChange(event) {
    var { editUser } = this.state
    editUser.firstname = event.target.value
    this.setState({ editUser: editUser })
  }
  handleLastnameChange(event) {
    var { editUser } = this.state
    editUser.lastname = event.target.value
    this.setState({ editUser: editUser })
  }
  handleEmailChange(event) {
    var { editUser } = this.state
    editUser.email = event.target.value
    this.setState({ editUser: editUser })
  }
  handleTelChange(event) {
    var { editUser } = this.state
    editUser.tel = event.target.value
    this.setState({ editUser: editUser })
  }
  handleAddressChange(event) {
    var { editUser } = this.state
    editUser.address = event.target.value
    this.setState({ editUser: editUser })
  }
  handleBirthDateChange(value) {
    var { editUser } = this.state
    if (value) {
      editUser._birth_date = value
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      editUser.birth_date = (new Date(editUser._birth_date - tzoffset)).toISOString().slice(0, -1);
      this.setState({ editUser: editUser })
    }
  }
  handleSave() {
    var { editUser, imageFile } = this.state
    var token = localStorage.getItem("token");
    if (imageFile) {
      var formData = new FormData();
      editUser.user_image_url = editUser.username + "-" + (new Date()).getTime()
      formData.append("image", imageFile);
      axios.post(process.env.REACT_APP_BACKEND + "users/images", formData, {
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
          'Authorization': `Bearer ${token}`,
          'filename': editUser.user_image_url
        }
      }).catch(error => {
        console.log(error)
      });
    }
    console.log(editUser)
    axios.put(
      process.env.REACT_APP_BACKEND + "users/edit", 
      JSON.stringify(editUser), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then(response => {
      axios.get(process.env.REACT_APP_BACKEND + "me", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response_user) => {
        localStorage.setItem("user", JSON.stringify(response_user.data));
      })
      
    }).catch(error => {
      console.log(error)
    });
    this.setState({ 
      user: editUser,
      editUser: editUser, 
      editFlag: false 
    })
  }
  handleCancel() {
    this.setState({ editFlag: false })
  }
  componentWillMount() {
    var user = JSON.parse(localStorage.getItem("user"));
    user._birth_date = new Date(user.birth_date)
    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    user.birth_date = (new Date(user._birth_date - tzoffset)).toISOString().slice(0, -1);
    this.setState({
      user: user,
      imageFileURL: process.env.REACT_APP_BACKEND + 'users/images/' + user.user_image_url
    });
  }
  render() {
    var { user, editFlag, editUser } = this.state;
    var firstname = (<p className="text-muted mb-0">{user.firstname}</p>)
    var lastname = (<p className="text-muted mb-0">{user.lastname}</p>)
    var email = (<p className="text-muted mb-0">{user.email}</p>)
    var tel = (<p className="text-muted mb-0">{user.tel}</p>)
    var address = (<p className="text-muted mb-0">{user.address}</p>)
    var birth_date = (<p className="text-muted mb-0">{(user._birth_date) ? user._birth_date.toDateString() : ""}</p>);
    var images = (
      <div>
        <img className="rounded-circle img-fluid" src={this.state.imageFileURL} alt="..." />
      </div>
    )
    var edit_button = (
      <div className="d-flex justify-content-center mb-2">
        <MDBBtn color="default" onClick={this.handleEditProfile} >
          <MDBIcon icon="pen" /> Edit Profile
        </MDBBtn>
      </div>
    )
    if (editFlag) {
      firstname = (<input className="form-control mr-sm-2" type="text" placeholder="First Name" aria-label="First Name" value={this.state.editUser.firstname} onChange={this.handleFirstnameChange} />)
      lastname = (<input className="form-control mr-sm-2" type="text" placeholder="Last Name" aria-label="Last Name" value={this.state.editUser.lastname} onChange={this.handleLastnameChange} />)
      email = (<input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" value={this.state.editUser.email} onChange={this.handleEmailChange} />)
      tel = (<input className="form-control mr-sm-2" type="text" placeholder="Telephone" aria-label="Telephone" value={this.state.editUser.tel} onChange={this.handleTelChange} />)
      address = (<input className="form-control mr-sm-2" type="text" placeholder="Address" aria-label="Address" value={this.state.editUser.address} onChange={this.handleAddressChange} />)
      birth_date = (<DatePicker selected={this.state.editUser._birth_date} onChange={this.handleBirthDateChange} />)
      edit_button = (
        <div>
        <div className="d-flex justify-content-center mb-2">
          <MDBInput type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={this.handleImageFileChange} />
        </div>
        <div className="d-flex justify-content-center mb-2">
          <MDBBtn color="default" onClick={this.handleSave} >
            <MDBIcon icon="save" /> Save
          </MDBBtn>
          <MDBBtn color="danger" onClick={this.handleCancel} >
            <MDBIcon icon="times-circle" /> Cancel
          </MDBBtn>
        </div>
        </div>
      )
    }

    return (
      <div>
        <section style={{ "background-color": "#eee;" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    {images}
                    <h5 className="my-3">{user.username}</h5>
                    <p className="text-muted mb-1">{(user.user_type) ? user.user_type.type_name : ""} {(user.user_type) ? user.user_type.type_id : ""}</p>
                    
                    {edit_button}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">First Name</p>
                      </div>
                      <div className="col-sm-9">
                        {firstname}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Last Name</p>
                      </div>
                      <div className="col-sm-9">
                        {lastname}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        {email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Telephone</p>
                      </div>
                      <div className="col-sm-9">
                        {tel}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        {address}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Birth Date</p>
                      </div>
                      <div className="col-sm-9">
                        {birth_date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="mb-4">Order History</p>
                    <div className="row d-flex justify-content-center">
                      <p className="mb-0">You haven’t ordered yet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AccountTemplate;

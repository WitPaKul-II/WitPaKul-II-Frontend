import axios from 'axios';
import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import DatePicker from 'react-datepicker';
import Navbar from '../components/Navbar';
import Footerbar from '../components/Footerbar';

class EditBrand extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {},
//       brands: {},
//       imageFile: null,
//       editUser: {},
//       editFlag: false
//     };
   
//     this.handleEditProfile = this.handleEditProfile.bind(this)
//     this.handleFirstnameChange = this.handleFirstnameChange.bind(this)
//     this.handleSave = this.handleSave.bind(this)
//     this.handleCancel = this.handleCancel.bind(this)
//   }

//   handleEditProfile() {
//     var { user } = this.state;
//     this.setState({
//       editUser: {...user},
//       editFlag: true
//     });
//   }
//   handleFirstnameChange(event) {
//     var { editUser } = this.state
//     editUser.firstname = event.target.value
//     this.setState({ editUser: editUser })
//   }
//   handleSave() {
//     var { editUser } = this.state
//     var token = localStorage.getItem("token");
//     console.log(editUser)
//     axios.put(
//       process.env.REACT_APP_BACKEND + "users/edit", 
//       JSON.stringify(editUser), 
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         }
//       }
//     ).then(response => {
//       axios.get(process.env.REACT_APP_BACKEND + "me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       }).then((response_user) => {
//         localStorage.setItem("user", JSON.stringify(response_user.data));
//       })
      
//     }).catch(error => {
//       console.log(error)
//     });
//     this.setState({ 
//       user: editUser,
//       editUser: editUser, 
//       editFlag: false 
//     })
//   }
//   handleCancel() {
//     this.setState({ editFlag: false })
//   }
//   componentWillMount() {
//     var token = localStorage.getItem("token");  
//     var user = JSON.parse(localStorage.getItem("user"));   
//     if (user.user_type.type_name === "Admin1" && this.props.id) {
//       axios.get(process.env.REACT_APP_BACKEND + "users/userid/" + this.props.id, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       })
//     }
   
//   }
//   render() {
//     var { user, editFlag, editUser } = this.state;
//     var firstname = (<p className="text-muted mb-0">{user.firstname}</p>)
//     var edit_button = (
//       <div className="d-flex justify-content-center mb-2">
//         <MDBBtn color="default" onClick={this.handleEditProfile} >
//           <MDBIcon icon="pen" /> Edit Profile
//         </MDBBtn>
//       </div>
//     )
//     if (editFlag) {
//       firstname = (<input className="form-control mr-sm-2" type="text" placeholder="First Name" aria-label="First Name" value={this.state.editUser.firstname} onChange={this.handleFirstnameChange} />)
//       edit_button = (
//         <div>
//         <div className="d-flex justify-content-center mb-2">
//           <MDBBtn color="default" onClick={this.handleSave} >
//             <MDBIcon icon="save" /> Save
//           </MDBBtn>
//           <MDBBtn color="danger" onClick={this.handleCancel} >
//             <MDBIcon icon="times-circle" /> Cancel
//           </MDBBtn>
//         </div>
//         </div>
//       )
//     }

//     return (
//       <div>
//         <section style={{ "background-color": "#eee;" }}>
//           <div className="container py-5">
//             <div className="row">
//               <div className="col-lg-8">
//                 <div className="card mb-4">
//                   <div className="card-body">
//                     <div className="row">
//                       <div className="col-sm-3">
//                         <p className="mb-0">First Name</p>
//                       </div>
//                       <div className="col-sm-9">
//                         {firstname}
//                       </div>
//                     </div>
//                     <hr />             
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
}


export default EditBrand;

  // import React from "react";
  // import { Redirect } from 'react-router-dom';
  // import { useSelector } from "react-redux";

  // const Profile = () => {
  //   const { user: currentUser } = useSelector((state) => state.auth);

  //   console.log(currentUser)

  //   if (!currentUser) {
  //     return <Redirect to="/login" />;
  //   }

  //   return (
  //     <div className="container">
  //       <header className="jumbotron">
  //         <h3>
  //           <strong>{currentUser.username}</strong> Profile
  //         </h3>
  //       </header>
  //       <p>
  //         <strong>Token:</strong> {currentUser.accessToken} 
  //       </p>
  //       <p>
  //         <strong>Role:</strong> {currentUser.user_type.type_id} {currentUser.user_type.type_name}
  //       </p>
  //       <p>
  //         <strong>Email:</strong> {currentUser.email}
  //       </p>
  //       <strong>Authorities:</strong>
  //       <ul>
  //         {currentUser.roles &&
  //           currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
  //       </ul>
  //     </div>
  //   );
  // };

  // export default Profile;

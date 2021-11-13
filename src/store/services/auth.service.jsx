import axios from "axios";

const API_URL = "http://localhost:4000/";

const register = (username, email, password, firstname, lastname, type_id) => {
  console.log(type_id)
  return axios.post(API_URL + "register", {
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    user_type: { type_id: type_id }
  });
};

const login = (username, password) => {
  return axios.post(API_URL + "login", {
    username,
    password,
  }).then((response_token) => {
    console.log("token", JSON.stringify(response_token.data, null, 2));
    if (response_token.data.access_token) {
      axios.get(API_URL + "me", {
        headers: {
          Authorization: `Bearer ${response_token.data.access_token}`,
        }
      }).then((response_user) => {
        console.log("users", JSON.stringify(response_user.data, null, 2));
        localStorage.setItem("token", response_token.data.access_token);
        localStorage.setItem("user", JSON.stringify(response_user.data));
      })
    }
  }
  );
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
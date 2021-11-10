import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Footerbar from './Footerbar';
import { register } from "../store/actions/auth";
import Navbar from "./Navbar";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Fill out the information completely!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 4 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 4 and 20 characters.
            </div>
        );
    }
};
const vfirstname = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The firstname must be between 3 and 20 characters.
            </div>
        );
    }
};

const vlastname = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The lastname must be between 3 and 20 characters.
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeFirstname = (e) => {
        const firstname = e.target.value;
        setFirstname(firstname);
    };
    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname);
    };
    // check Successful true / false
    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password, firstname, lastname, 'C01'))
                .then(() => {
                    window.alert('register successful!')
                    props.history.push("/login");
                    window.location.reload();
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful();
                });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="col-md-12">
                <div className="card card-container">
                    <div className="logo mb-3 ">
                        <div className="col-md-12 text-center">
                            <h1>Resgister</h1>
                        </div>
                    </div>
                    <img
                        src="/assets/image/TheLittle.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                    <Form onSubmit={handleRegister} ref={form}>
                        {!successful && (
                            <div>
                                <div className="form-group labelblock">
                                    <label htmlFor="username">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                        validations={[required, vusername]}
                                    />
                                </div>
                                <div className="form-group labelblock">
                                    <label htmlFor="firstname">firstname</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        value={firstname}
                                        onChange={onChangeFirstname}
                                        validations={[required, vfirstname]}
                                    />
                                </div>
                                <div className="form-group labelblock">
                                    <label htmlFor="lastname">Lastname</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="lastname"
                                        value={lastname}
                                        onChange={onChangeLastname}
                                        validations={[required, vlastname]}
                                    />
                                </div>
                                <div className="form-group labelblock">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                        validations={[required, validEmail]}
                                    />
                                </div>
                                <div className="form-group labelblock">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">register</button>
                                </div>

                                <div className="form-group text-center">
                                    <Link to="/"> <button className="button is-text" >Cancel</button></Link>
                                </div>
                            </div>
                        )}
                        {/*message from backend  */}
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        {/*checkBtn register successful   */}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </div>
            </div>
            <Footerbar />
        </div>
    );
};

export default Register;

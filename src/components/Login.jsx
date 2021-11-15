import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Footerbar from '../components/Footerbar';
import { login } from "../store/actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Fill out the information completely!
            </div>
        );
    }
};
const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();
        // checkBtn login true or false
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    // window.alert('login successful!')
                    props.history.push("/");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }

    };
    // if (isLoggedIn) {
    //     return <Redirect to="/profile" />;
    // }
    return (
        <div>
            <Navbar />
            <div className="col-md-12">
                <div className="card card-container card-login-register">
                    <div className="logo mb-3 ">
                        <div className="col-md-12 text-center">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <img
                        src="/assets/image/TheLittle.png"
                        alt="profile-img"
                        // className="profile-img-card"
                    />

                    <Form onSubmit={handleLogin} ref={form}>
                        <div className="form-group labelblock">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required]}
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
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        <div className="form-group text-center ">
                            <Link to="register"> <button className="button is-text">Register</button></Link>
                        </div>
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}

                                </div>
                            </div>
                        )}
                        {/* checkBtn login true or false  */}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </div>
            </div>
            <Footerbar />
        </div>
    );
};

export default Login;

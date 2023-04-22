import React, {useEffect, useState} from "react";
import "./login.css";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { loginThunk } from "../../services/wanderer-thunk";

const initialValue = {
    username: '',
    password: ''
}
const LoginComponent = () => {

        const [user, setUser] = useState(initialValue);
        const { username, password } = user;

        let navigate = useNavigate();

        const onValueChange = (e) => {
            console.log({[e.target.name]: e.target.value});
            setUser({...user, [e.target.name]: e.target.value})
        };

        // const addUserDetails = async() => {
        //     const response = await login(user);
        //     console.log(response.data);
        //     if(response.data.status == 200) {
        //         console.log(response.data.message._id);
        //         navigate(`/profile/${response.data.message._id}`);
        //     } else {
        //         window.alert(response.data.message);
        //     }
        // }



    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk(user));
            navigate("/wanderer/profile");
        } catch (e) {
            alert(e);
        }
    };

        const handleRegister = () => {
            navigate('/register');
        };

    return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card-group mb-0">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h1>Login</h1>
                                    <p className="text-muted">Sign In to your account</p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="textarea" className="form-control" placeholder="Username" onChange={(e) => onValueChange(e)} name='username' value={username} id="username" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => onValueChange(e)} name='password' value={password} id="password"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-primary px-4" onClick={() => handleLogin()}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card text-white bg-primary py-5 d-md-down-none">
                                <div className="card-body text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod*/}
                                        {/*    tempor incididunt ut labore et dolore magna aliqua.</p>*/}
                                        <button type="button" className="btn btn-primary active mt-3" onClick={() => handleRegister()}>Register Now!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // <div className="container">
        //     <div className="form">
        //         <div className="sign-in-section">
        //             <h1>Log in</h1>
        //             <br/>
        //             {/*<ul>*/}
        //             {/*    <li><i className="fab fa-facebook-f"></i></li>*/}
        //             {/*    <li><i className="fab fa-linkedin-in"></i></li>*/}
        //             {/*    <li><i className="fab fa-twitter"></i></li>*/}
        //             {/*</ul>*/}
        //             <p>or use your email</p>
        //             <form>
        //                 <div className="form-field">
        //                     <label htmlFor="email">Email</label>
        //                     <input id="email" type="email" placeholder="Email"/>
        //                 </div>
        //                 <div className="form-field">
        //                     <label htmlFor="password">Password</label>
        //                     <input id="password" type="password" placeholder="Password"/>
        //                 </div>
        //                 <div className="form-options">
        //                     <div className="checkbox-field">
        //                         <input id="rememberMe" type="checkbox" className="checkbox"/>
        //                         <label htmlFor="rememberMe">Remember Me</label>
        //                     </div>
        //                     <a href="#">Forgot Password?</a>
        //                 </div>
        //                 <div className="form-field">
        //                     <input type="submit" className="btn btn-signin" value="Submit"/>
        //                 </div>
        //             </form>
        //             <div className="links">
        //                 <a href="#">Privacy Policy</a>
        //                 <a href="#">Terms & Conditions</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
};
export default LoginComponent;
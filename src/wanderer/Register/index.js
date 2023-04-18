import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";
import {loginUser} from "../../services/wanderer-service.js"
import {FormGroup, FormControl, InputLabel, Input, Button, styled, Typography} from '@mui/material';


const initialValue = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const RegisterComponent = () => {

    const [userRegistration, setUserRegistration] = useState(initialValue);
    const { firstName, lastName, username, password, email, phone } = userRegistration;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        console.log({[e.target.name]: e.target.value});
        setUserRegistration({...userRegistration, [e.target.name]: e.target.value})
    }

    const registerUser = async() => {
        // //const response = await loginUser(user);
        // console.log(response.data);
        // if(response.data.status == 200) {
        //     navigate('/tuiter/profile');
        // } else {
            window.alert("registered");
            navigate('/login')
        //}
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card-group mb-0">
                        <div className="card p-4">
                            <div className="card-body">
                                <h1>Login</h1>
                                <p className="text-muted">Register your account</p>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" placeholder="firstName" onChange={(e) => onValueChange(e)} name='firstName' value={firstName} id="firstName" />
                                </div>
                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" className="form-control" placeholder="LastName" onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="lastName"/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" placeholder="Username" onChange={(e) => onValueChange(e)} name='username' value={username} id="username" />
                                </div>
                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => onValueChange(e)} name='password' value={password} id="password"/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" placeholder="email" onChange={(e) => onValueChange(e)} name='email' value={email} id="email" />
                                </div>
                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" className="form-control" placeholder="phone" onChange={(e) => onValueChange(e)} name='phone' value={phone} id="phone"/>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-primary px-4" onClick={() => registerUser()}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
};
export default RegisterComponent;
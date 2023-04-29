import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";
import {registerUser} from "../../services/wanderer-service";
import {FormGroup, FormControl, InputLabel, Input, Button, styled, Typography} from '@mui/material';
import {checkUserName} from "../../services/wanderer-service";

const initialValue = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone_number: '',
    role: ''
}


const RegisterComponent = () => {

    const [userRegistration, setUserRegistration] = useState(initialValue);
    const [message, setMessage] = useState("");
    const { username, password, firstName, lastName, email, dob, phone_number, role } = userRegistration;

    let navigate = useNavigate();

    const onValueChange = async (e) => {
        console.log({[e.target.name]: e.target.value});
        setUserRegistration({...userRegistration, [e.target.name]: e.target.value});
    }

    const registerUserDetails = async() => {
        console.log(userRegistration);
        const response = await registerUser(userRegistration);
        //console.log(response.data);
        if(response.data.status == 200) {
            console.log(response.data.message._id);
            navigate(`/login/`);
        } else if(response.data.status == 402) {
            setMessage(response.data.message);
        } else if(response.data.status == 404) {
            setMessage(response.data.message);
        } else {
            setMessage("Error occured");
        }

    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card-group mb-0">
                        <div className="card p-4">
                            <div className="card-body">

                                <h1>Register </h1>
                                <p className="text-muted">Register your account</p>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => onValueChange(e)} name='firstName' value={firstName} id="firstName" />
                                </div>
                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="lastName"/>

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
                                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => onValueChange(e)} name='email' value={email} id="email" />
                                </div>
                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" className="form-control" placeholder="Phone" onChange={(e) => onValueChange(e)} name='phone_number' value={phone_number} id="phone_number"/>
                                </div>
                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="date" className="form-control" placeholder="Date of Birth" onChange={(e) => onValueChange(e)} name='dob' value={dob} id="dob"/>
                                </div>
                                <div>
                                    <h6>User Role</h6>
                                    <div className="row">
                                        <div className="col-1">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="admin"
                                                onChange={(e) => onValueChange(e)}
                                            /></div>
                                        <div className="option-box col-11">Admin</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="loggedInUser"
                                                onChange={(e) => onValueChange(e)}
                                            /></div>
                                        <div className="option-box col-11">Normal User</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-primary px-4" onClick={() => registerUserDetails()}>Register</button>

                                    </div>
                                </div>
                                { message ? (
                                    <div>
                                        <p style={{"color": "red"}}>**{message}</p>
                                    </div>
                                ) : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
};
export default RegisterComponent;
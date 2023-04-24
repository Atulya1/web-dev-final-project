import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {updateProfile} from "../../services/wanderer-service";
import {loginThunk, updateUserThunk} from "../../services/wanderer-thunk";

const EditProfileComponent = () => {
    const profileData = useSelector(state => state.user);
    let nav = useNavigate();
    let profile;
    if(profileData.currentUser) {
        profile = profileData.currentUser;
    } else {
        nav('/login');
    }

    const [userDetails, setUserDetails] = useState(profile);
    const { username, password, firstName, lastName, email, dob, phone_number } = userDetails;

    const dispatch = useDispatch();
    const saveProfile = async () => {
        console.log("aaaaaaa");
        console.log(userDetails);
        await dispatch(updateUserThunk( {
                                            userId: profileData.currentUser._id,
                                            data: userDetails
                                        }));
        nav(`/wanderer/profile`);
    }

    const firstNameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...userDetails,
            name: {
                ...userDetails.name,
                firstName: nameValue
            }

        };
        setUserDetails(newState);
    }

    const lastNameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...userDetails,
            name: {
                ...userDetails.name,
                lastName: nameValue
            }
        };
        setUserDetails(newState);
    }

    const emailChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...userDetails,
            email: nameValue
        };
        setUserDetails(newState);
    }

    const usernameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...userDetails,
            username: nameValue
        };
        setUserDetails(newState);
    }
    const dobChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...userDetails,
            dob: nameValue
        };
        setUserDetails(newState);
    }

    const phnChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...userDetails,
            phone_number: nameValue
        };
        setUserDetails(newState);
    }


    const changeRoute = () => {
        let path = `../`;
        nav(path);
    }


    useEffect(() => {
        console.log(profile);
    }, []);

    return(
        <div className="border rounded px-0 py-3">
            <div>
                <div className="position-relative">
                    <img src="../../Images/bannerimage.jpeg" alt="banner" className="w-100 px-0 mx-0 border-0" style={{height:450}}></img>
                    <img src="../../Images/cartoonpic.jpeg" alt="avatar" className="h-50 rounded-circle card-img-overlay mx-3 top-50"
                         style={{left: '35%', marginTop: '6.5rem'}}></img>
                </div>
                <div className="position-relative" style={{paddingTop:10, left: '93%'}}>
                    <button className="rounded-pill btn btn-primary fw-bold " onClick={()=>saveProfile()}>Save</button>
                </div>
                <div className="position-relative" style={{paddingTop:140, paddingLeft:420}}>
                    <h4>{profile.username}</h4>
                </div>

            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        onChange={(e) => usernameChangeHandler(e)}
                        value={username}
                        name='username'
                        id="outlined-read-only-input"
                        label="Username"
                        style ={{width:762}}
                        defaultValue={profile.username}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div className="col-6">
                    <TextField
                        onChange={(e) => firstNameChangeHandler(e)}
                        value={firstName}
                        id="outlined-read-only-input"
                        name='firstName'
                        label="First Name"
                        style ={{width:300}}
                        defaultValue={profile.name.firstName}
                    />
                </div>
                <div className="col-6">
                    <TextField
                        onChange={(e) => lastNameChangeHandler(e)}
                        id="outlined-read-only-input"
                        value={lastName}
                        name='lastName'
                        label="Last Name"
                        style ={{width:300}}
                        defaultValue={profile.name.lastName}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        onChange={(e) => emailChangeHandler(e)}
                        value={email}
                        name='email'
                        id="outlined-read-only-input"
                        label="Email"
                        style ={{width:762}}
                        defaultValue={profile.email}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        onChange={(e) => dobChangeHandler(e)}
                        value={dob}
                        name='dob'
                        id="outlined-read-only-input"
                        label="Date of Birth"
                        style ={{width:762}}
                        type="date"
                        defaultValue={profile.dob}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        onChange={(e) => phnChangeHandler(e)}
                        value={phone_number}
                        name='phone_number'
                        id="outlined-read-only-input"
                        label="Phone Number"
                        style ={{width:762}}
                        defaultValue={profile.phone_number}
                    />
                </div>
            </div>
            <br/>
        </div>
    );
};
export default EditProfileComponent;
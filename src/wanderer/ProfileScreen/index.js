import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router";
import TextField from "@mui/material/TextField";

const ProfileComponent = () => {
    const profileData = useSelector(state => state.user);
    let nav = useNavigate();
    let profile;
    if(profileData.currentUser) {
        profile = profileData.currentUser.message;
    } else {
        nav('/login');
    }


    const changeRoute = () => {
        let path = `../`;
        nav(path);
    }

    const params = useParams();

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
                <div className="position-relative" style={{paddingTop:140, paddingLeft:420}}>
                    <h4>{profile.username}</h4>
                </div>
                {/*<Link to="../edit-profile">*/}
                {/*    <button className="rounded-pill btn btn-outline-secondary float-end w-25 mt-2 pe-3 me-2 fw-bold text-black">Edit profile</button>*/}
                {/*</Link>*/}
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div className="col-6">
            <TextField
                id="outlined-read-only-input"
                label="First Name"
                style ={{width:300}}
                defaultValue={profile.name.firstName}
                InputProps={{
                    readOnly: true,
                }}
            />
                </div>
                <div className="col-6">
                    <TextField
                        id="outlined-read-only-input"
                        label="Last Name"
                        style ={{width:300}}
                        defaultValue={profile.name.lastName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Email"
                        style ={{width:762}}
                        defaultValue={profile.email}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Date of Birth"
                        style ={{width:762}}
                        defaultValue={profile.dob}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Phone Number"
                        style ={{width:762}}
                        defaultValue={profile.phone_number}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
            <br/>
        </div>
    );
};
export default ProfileComponent;
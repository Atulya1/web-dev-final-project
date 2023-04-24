import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import TextField from "@mui/material/TextField";
import {addBooking} from "../../services/wanderer-service";

const ProfileComponent = () => {
    const profileData = useSelector(state => state.user);
    const [heartToggle, setToggle] = useState(true);
    let nav = useNavigate();
    let profile;

    if(profileData.currentUser) {
        profile = profileData.currentUser;
    } else {
        nav('/login');
    }


    // useEffect(() => {
    //
    // }, [profileData]);


    const changeRoute = () => {
        let path = `../`;
        nav(path);
    }

    const params = useParams();

    return(
        <div className="border rounded px-0 py-3">
            <div>
                <div className="position-relative">
                    <img src="../../Images/bannerimage.jpeg" alt="banner" className="w-100 px-0 mx-0 border-0" style={{height:450}}></img>
                    <img src="../../Images/cartoonpic.jpeg" alt="avatar" className="h-50 rounded-circle card-img-overlay mx-3 top-50"
                    style={{left: '35%', marginTop: '6.5rem'}}></img>
                </div>
                <div className="position-relative" style={{paddingTop: 10, left: '88%'}}>
                    <button className="rounded-pill btn btn-outline-secondary" onClick={()=> nav('/wanderer/edit-profile')}>Edit profile</button>
                </div>
                <div className="position-relative" style={{paddingTop:140, paddingLeft:420}}>
                    <h4>{profile.username}</h4>
                </div>
            </div>

            <br/>
                <div className="row" style={{paddingLeft:80}}>
            {/*<TextField*/}
            {/*    id="outlined-read-only-input"*/}
            {/*    label="First Name"*/}
            {/*    style ={{width:300}}*/}
            {/*    defaultValue={profile.name.firstName}*/}
            {/*    InputProps={{*/}
            {/*        readOnly: true,*/}
            {/*    }}*/}
            {/*/>*/}
                    <div>
                        <span>First Name: </span> {profile.name.firstName}
                    </div>
                </div>
            <br />
                <div className="row" style={{paddingLeft:80}}>
                    {/*<TextField*/}
                    {/*    id="outlined-read-only-input"*/}
                    {/*    label="Last Name"*/}
                    {/*    style ={{width:300}}*/}
                    {/*    defaultValue={profile.name.lastName}*/}
                    {/*    InputProps={{*/}
                    {/*        readOnly: true,*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <div>
                        <span>Last Name: </span> {profile.name.lastName}
                    </div>
                </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    {/*<TextField*/}
                    {/*    id="outlined-read-only-input"*/}
                    {/*    label="Email"*/}
                    {/*    style ={{width:762}}*/}
                    {/*    defaultValue={profile.email}*/}
                    {/*    InputProps={{*/}
                    {/*        readOnly: true,*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <span>Email: </span> {profile.email}
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    {/*<TextField*/}
                    {/*    id="outlined-read-only-input"*/}
                    {/*    label="Date of Birth"*/}
                    {/*    style ={{width:762}}*/}
                    {/*    defaultValue={profile.dob}*/}
                    {/*    InputProps={{*/}
                    {/*        readOnly: true,*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <span>Date of birth: </span> {profile.dob}
                </div>
            </div>
            <br/>
            <div className="row" style={{paddingLeft:80}}>
                <div>
                    {/*<TextField*/}
                    {/*    id="outlined-read-only-input"*/}
                    {/*    label="Phone Number"*/}
                    {/*    style ={{width:762}}*/}
                    {/*    defaultValue={profile.phone_number}*/}
                    {/*    InputProps={{*/}
                    {/*        readOnly: true,*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <span>Phone Number: </span> {profile.phone_number}
                </div>
            </div>
            <br/>
        </div>
    );
};
export default ProfileComponent;
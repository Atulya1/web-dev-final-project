import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "../reducers/profile";
import {Link} from "react-router-dom";
import './index.css';

function EditProfileComponent() {

    const profile = useSelector(
        (state) => state.profile);

    const [profileData, setProfileData] = useState(profile);
    const dispatch = useDispatch();
    console.log(profileData);

    const saveProfile = () => {
        dispatch(updateProfile(profileData));
    }

    const firstNameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...profileData,
            firstName: nameValue
        };
        setProfileData(newState);
    }

    const lastNameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newState = {
            ...profileData,
            lastName: nameValue
        };
        setProfileData(newState);
    }

    const bioChangeHandler = (event) => {
        const value = event.target.value;
        const newState = {
            ...profileData,
            bio: value
        };
        setProfileData(newState);
    }

    const locationHandler = (event) => {
        const value = event.target.value;
        const newState = {
            ...profileData,
            location: value
        };
        setProfileData(newState);
    }

    const websiteHandler = (event) => {
        const value = event.target.value;
        const newState = {
            ...profileData,
            website: value
        };
        setProfileData(newState);
    }

    const dateHandler = (event) => {
        const value = event.target.value;
        const newState = {
            ...profileData,
            dateOfBirth: value
        };
        setProfileData(newState);
    }

    return (
        <div style={{border: "1px solid lightgrey"}}>
            <li className="list-group-item list-group-item-action">
                <Link to={"/profile/"+profileData.firstName}>
                    <i className="fas fa-xmark wd-black-color" style={{paddingLeft:"20px", paddingRight:"20px", position:"relative", top: "7px"}}></i>
                </Link>
                <span style={{paddingLeft:"10px", paddingTop: "10px",fontWeight:"bold",fontSize:"24px",fontFamily:"arial", position:"relative", top: "10px"}}>Edit Profile</span>

                <Link to={"/profile/"+profileData._id}>
                    <button type="button"
                            onClick={saveProfile}
                            className="btn btn-dark btn-block rounded-pill mt-2"
                            style={{width:"15%", float:"right", position:"relative", right: "10px", top:"2px"}}>Save</button>
                </Link>

                <div className="parent">
                    <div className="image1" >
                        <img className="wd-profile-image" style={{width: "100%"}} src="./images/dallas.webp" alt={"profile"}/>
                    </div>
                    <div className="image2">
                        <img className="rounded-circle" height={125} alt={"avatarIcon"} src="./images/samantha.jpeg"/>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <div className="wd-main-body" style={{border: "none", height:"auto",fontFamily:"arial"}}>

                    <div className="wd-main-body-text-div" style={{marginLeft: "0", width: "735px"}}>

                        <div className='full-input'>
                            <label htmlFor="name" className="input-label">First Name</label>
                            <input
                                onChange={firstNameChangeHandler}
                                value={profileData.firstName}
                                className="noBorderInput"
                                id="name"
                            />
                        </div>
                        <br/>

                        <div className='full-input'>
                            <label htmlFor="lastName" className="input-label">Last Name</label>
                            <input
                                onChange={lastNameChangeHandler}
                                value={profileData.lastName}
                                className="noBorderInput"
                                id="lastName"
                            />
                        </div>
                        <br/>

                        <div className='full-input'>
                            <label htmlFor="bio" className="input-label">Bio</label>
                            <textarea
                                onChange={bioChangeHandler}
                                value={profileData.bio}
                                className="noBorderInput"
                                id="bio"
                            />
                        </div>
                        <br/>

                        <div className='full-input'>
                            <label htmlFor="location" className="input-label">Location</label>
                            <input
                                onChange={locationHandler}
                                value={profileData.location}
                                className="noBorderInput"
                                id="location"
                            />
                        </div>
                        <br/>

                        <div className='full-input'>
                            <label htmlFor="website" className="input-label">Website</label>
                            <input
                                onChange={websiteHandler}
                                value={profileData.website}
                                className="noBorderInput"
                                id="website"
                            />
                        </div>
                        <br/>

                        <div className='full-input'>
                            <label htmlFor="birthday" className="input-label">Birth Date</label>
                            <input
                                onChange={dateHandler}
                                value={profileData.dateOfBirth}
                                className="noBorderInput"
                                id="birthday"
                                type="date"
                            />
                        </div>
                        <br/>

                        <div className='row'>
                            <div className="col-11">Switch to professional</div>
                            <div className="col-1">
                                >
                            </div>
                        </div>
                        <br/>

                    </div>
                </div>

            </li>
        </div>
    );
}

export default EditProfileComponent;
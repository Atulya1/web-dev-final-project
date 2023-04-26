import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {addBooking, getUserByUserId} from "../../services/wanderer-service";


const ProfileComponent = () => {

    const profileData = useSelector(state => state.user);
    const [toggle, setToggle] = useState(true);
        const [profile, setProfileData] = useState("");
    let nav = useNavigate();
    let profiled;
        if(profileData.currentUser) {
            profiled = profileData.currentUser;
        } else {
            nav('/login');
        }

        const changeRoute = () => {
            let path = `../`;
            nav(path);
        }

        const params = useParams();

        async function fetchUserDataByUserId() {
            console.log("parameters", params.userId);
            let loginUser = params.userId;
            if(params.userId == "my") {
                loginUser = localStorage.getItem("user")._id;
            }
            try {
                const response = await getUserByUserId(loginUser);
                console.log("user details", response);
                setProfileData(response);
            } catch (error) {
                console.error(error);
            }
        }

        useEffect(() => {
            console.log("yes", profiled);
            fetchUserDataByUserId();
            if (profiled && profiled._id === params.userId) {
                console.log("yes", profiled);
                setToggle(!toggle);
            }
        }, [params.userId]);

        return (
            <div  style={{paddingRight:170}}>
                <div>
                    <div className="position-relative">
                        <img src="../../Images/bannerimage.jpeg" alt="banner"
                             className="w-100 px-0 mx-0 border-0" style={{height: 450}}></img>
                        <img src="../../Images/cartoonpic.jpeg" alt="avatar"
                             className="h-50 rounded-circle card-img-overlay mx-3 top-50"
                             style={{left: '35%', marginTop: '6.5rem'}}></img>
                    </div>
                    { !toggle && (
                        <div className="position-relative" style={{paddingTop: 10, left: '88%'}}>
                            <button className="rounded-pill btn btn-outline-secondary"
                                    onClick={() => nav('/wanderer/edit-profile')}>
                                Edit profile
                            </button>
                        </div>
                    )}
                    <div className="position-relative" style={{paddingTop: 140, paddingLeft: 440}}>
                        <h4>{profile.username}</h4>
                    </div>
                </div>

                <br/>
                <div className="row" style={{paddingLeft: 80}}>
                    <div>
                        <span>First Name: </span> {profile.name?.firstName}
                    </div>
                </div>
                <br/>
                <div className="row" style={{paddingLeft: 80}}>
                    <div>
                        <span>Last Name: </span> {profile.name?.lastName}
                    </div>
                </div>
                <br/>
                <div className="row" style={{paddingLeft: 80}}>
                    <div>
                        <span>Email: </span> {profile.email}
                    </div>
                </div>
                <br/>
                { !toggle && (
                    <div>
                    <div className="row" style={{paddingLeft: 80}}>
                        <div>
                            <span>Date of birth: </span> {profile.dob}
                        </div>
                    </div>
                    <br/>
                    <div className="row" style={{paddingLeft: 80}}>
                    <div>
                    <span>Phone Number: </span> {profile.phone_number}
                    </div>
                    </div>
                    </div>
                )
                }
                <br/>
            </div>
        );
    }

    export default ProfileComponent;
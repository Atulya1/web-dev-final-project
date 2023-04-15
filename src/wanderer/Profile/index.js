import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router";
import experienceData from "../Experience-Detail/experiencedetail.json";

const ProfileComponent = () => {
    const profileData = useSelector(state => state.profile);
    let nav = useNavigate();
    const changeRoute = () => {
        let path = `../`;
        nav(path);

    }

    const [profile, setProfile] = useState({});

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const profile = profileData.filter(x => x._id == params.id);
        window.scrollTo(0, 0)
        if(profile.length > 0) {
            setProfile(profile[0]);
        } else {
            navigate("/");
        }
    }, [params.id]);

    return(
        <div className="border rounded px-0 py-3">
            <div className="row px-3">
                <div className="col-1">
                    <span style={{"cursor": "pointer"}} onClick={() => {changeRoute()}}><i className="fa-sharp fa-solid fa-arrow-left"></i></span>
                </div>
                <div className="col-11">
                    <div className="fw-bold">{profile.firstName} {profile.lastName}</div>
                    <div className="text-secondary small">{profile.numberOfTweets} Tweets</div>
                </div>
            </div>
            <div>
                <div className="position-relative">
                    <img src={profile.bannerPicture} alt="banner" className="w-100 px-0 mx-0 border-0"></img>
                    <img src={profile.profilePicture} alt="avatar" className="h-50 rounded-circle card-img-overlay mx-3 my-5 top-50"></img>
                </div>
                <Link to="../edit-profile">
                    <button className="rounded-pill btn btn-outline-secondary float-end w-25 mt-2 pe-3 me-2 fw-bold text-black">Edit profile</button>
                </Link>
            </div>
            <br/>
            <div className="mt-5 px-3 ">
                <div className="text-black fw-bold">{profile.firstName} {profile.lastName}</div>
                <div className="text-secondary small">{profile.handle}</div>
                <p className="pt-2 small text-secondary">{profile.bio}</p>
            </div>
            <div className="row px-3 pb-1 bt-0">
                <div className="col-4 small text-secondary"><i className="fa-solid fa-location-dot pe-2"></i>{profile.location}</div>
                <div className="col-4 small text-secondary"><i className="bi bi-balloon pe-2"></i>Born {profile.dateOfBirth}</div>
                <div className="col-4 small text-secondary"><i className="fa-sharp fa-solid fa-calendar-days pe-2"></i>Joined {profile.dateJoined}</div>
            </div>
            <div className="row px-3">
                <div className="col-3">
                    <span className="fw-bold small">{profile.followingCount}</span><span className="ps-1 text-secondary small">Following</span>
                </div>
                <div className="col-9">
                    <span className="fw-bold small">{profile.followersCount}</span><span className="ps-1 text-secondary small">Followers</span>
                </div>

            </div>
        </div>
    );
};
export default ProfileComponent;
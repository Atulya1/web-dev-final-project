
import NavigationSidebar from "./NavigationSidebar";
import {Routes, Route} from "react-router";
import React from "react";
import experienceReducer from "./Experiences/experience-reducer";
import experienceDetail from "./Experience-Detail/experience_detail_reducer";
import HomeProjectReducer from "./HomeComponent/HomeProject-reducer";
import CitySuggestionReducer from "./CitySuggestions/city_suggestion_reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import profileReducer from "./Profile/profile-reducer";
import HomeExp from "./Experiences/index";
import DetailExp from "./Experience-Detail";
import GlobalCities from "./HomeComponent";
import CitySuggest from "./CitySuggestions";
import NavBarTop from "./NavBarTop";
import HomeComponentProject from "./HomeComponent/HomeComponentProject";
import ProfileComponent from "./ProfileScreen";
import EditProfileComponent from "./ProfileScreen/edit-profile";
import DetailExpOfUser from "./MyExperiences/my_experiences";
import LoginComponent from "./Login/index.js";
import RegisterComponent from "./Register/index.js";
import UserExperienceComponent from "./UserExperience/index.js";
import UpcomingTripsComponent from "./AddUpcomingTrip";
import userDetailsReducer from "../redux/user-details-reducer";
import BookATrip from "./BookATrip";
import MyBookings from "./MyBookings";
import MyBucketList from "./MyBucketList";
import LayoutComponent from "./Layout";

const store = configureStore({
                                 reducer: {profile: profileReducer, experience: experienceReducer, experiencedetail: experienceDetail,
                                     Cities: HomeProjectReducer, CitySuggestions: CitySuggestionReducer,user: userDetailsReducer}
                             });

function Wanderer() {
    return (
        <Provider store={store}>

            <div className="row" >
                <Routes>
                    <Route exact path="/login" element={<LoginComponent/>} />
                    <Route path="/*" element={<LayoutComponent/>} />
                </Routes>
            </div>
        </Provider>
    )
}
export default Wanderer;

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
import EditProfileComponent from "./EditProfile";
import DetailExpOfUser from "./MyExperiences/my_experiences";
import LoginComponent from "./Login/index.js";
import RegisterComponent from "./Register/index.js";
import UserExperienceComponent from "./UserExperience/index.js";
import UpcomingTripsComponent from "./AddUpcomingTrip";
import userDetailsReducer from "../redux/user-details-reducer";
import BookATrip from "./BookATrip";
import MyBookings from "./MyBookings";
import MyBucketList from "./MyBucketList";
import NavBaratTop from "./NavBarTop";
import TopIconsComponent from "./TopIcons";
import SearchComponentProject from "./HomeComponent/SearchResult";
import AllUsers from "./AdminAccess/AllUsers";
import EditUser from "./AdminAccess/EditUsers";

const store = configureStore({
                                 reducer: {profile: profileReducer, experience: experienceReducer, experiencedetail: experienceDetail,
                                     Cities: HomeProjectReducer, CitySuggestions: CitySuggestionReducer,user: userDetailsReducer}
                             });

function Wanderer() {
    return (
        <Provider store={store}>
            {/*<div style={{"position": "fixed",*/}
            {/*    "top": 0,*/}
            {/*    "width":"100%",*/}
            {/*    "z-index": "20"}}><NavBaratTop/></div>*/}


            <div className="row" >
                <Routes>
                    <Route path="/login" element={<LoginComponent/>}/>
                </Routes>
                <div className="col-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-8"
                     style={{"position": "relative"}}>
                    <br/>
                    <Routes>
                        <Route path="/" element={<HomeComponentProject/>}/>
                        {/*//<Route path="wanderer" element={<HomeComponentProject/>}/>*/}
                        <Route path="/explore/:id" element={<GlobalCities/>}/>
                        <Route path="/wanderer/profile" element={<ProfileComponent/>}/>
                        <Route path="/profile/:id" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfileComponent/>}/>
                        <Route path="/experiencedetail/:id" element={<DetailExp/>}/>
                        <Route path="/cities" element={<CitySuggest/>}/>
                        <Route path="/experience" element={<DetailExpOfUser/>}/>
                        <Route path="/register" element={<RegisterComponent/>}/>
                        <Route path="/wanderer/reviews" element={<UserExperienceComponent/>}/>
                        <Route path="/wanderer/bookatrip" element={<BookATrip/>}/>
                        <Route path="/wanderer/upcomingTrips" element={<UpcomingTripsComponent/>}/>
                        <Route path="/wanderer/bookings" element={<MyBookings/>}/>
                        <Route path="/wanderer/bucketList" element={<MyBucketList/>}/>
                        <Route path="/cityDetails/:placeID" element={<SearchComponentProject/>}/>
                        <Route path="/wanderer/editUserDetails" element={<AllUsers/>}/>
                        <Route path="/wanderer/editUserDetails/edit/:id" element={<EditUser />} />

                    </Routes>
                </div>
                {/*<div className="col-3" style={{"height": "780px",*/}
                {/*    "overflow-x": "auto",*/}
                {/*    "overflow-y": "auto"}}>*/}
                {/*    <HomeExp/>*/}
                {/*</div>*/}
            </div>
        </Provider>
    )
}
export default Wanderer;
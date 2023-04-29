import React, { useEffect, useState } from "react";
import NavigationSidebar from "../NavigationSidebar";
import {Route, Routes} from "react-router";
import HomeComponentProject from "../HomeComponent/HomeComponentProject";
import GlobalCities from "../HomeComponent";
import ProfileComponent from "../ProfileScreen";
import EditProfileComponent from "../ProfileScreen/edit-profile";
import DetailExp from "../Experience-Detail";
import CitySuggest from "../CitySuggestions";
import DetailExpOfUser from "../MyExperiences/my_experiences";
import RegisterComponent from "../Register";
import UserExperienceComponent from "../UserExperience";
import BookATrip from "../BookATrip";
import UpcomingTripsComponent from "../AddUpcomingTrip";
import MyBookings from "../MyBookings";
import MyBucketList from "../MyBucketList";
import SearchComponentProject from "../HomeComponent/SearchResult";
import AllUsers from "../AdminAccess/AllUsers";
import EditUser from "../AdminAccess/EditUsers";

const LayoutComponent = () => {
    return (
        <React.Fragment>
            <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-none">
                <NavigationSidebar active="explore" />
            </div>
            <div className="col-xl-10 col-lg-12 col-md-12"
                 style={{"position": "relative"}}>
                <br/>
                <Routes>
                    <Route path="/" element={<HomeComponentProject/>}/>
                    <Route path="/explore/:id" element={<GlobalCities/>}/>
                    <Route path="/wanderer/profile/:userId" element={<ProfileComponent/>}/>
                    <Route path="/profile/:id" element={<ProfileComponent/>}/>
                    <Route path="/wanderer/edit-profile" element={<EditProfileComponent/>}/>
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
        </React.Fragment>
    )
}

export default LayoutComponent;
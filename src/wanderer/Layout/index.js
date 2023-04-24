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

const LayoutComponent = () => {
    return (
        <React.Fragment>
            <div className="col-2">
                <NavigationSidebar active="explore" />
            </div>
            <div className="col-8"
                 style={{"position": "relative"}}>
                <br/>
                <Routes>
                    <Route path="/" element={<HomeComponentProject/>}/>
                    <Route path="/explore/:id" element={<GlobalCities/>}/>
                    <Route path="/wanderer/profile" element={<ProfileComponent/>}/>
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
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default LayoutComponent;
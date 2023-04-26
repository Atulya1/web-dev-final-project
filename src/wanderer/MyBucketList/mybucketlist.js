import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBooking, addUpcomingTrip } from "../../services/wanderer-service";
import { useSelector } from "react-redux";

const MyBucketListComponent = (bucketlist) => {
    const bookingDets = bucketlist.mybooking;
    console.log("Aaaaa", bookingDets);
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h6 style={{fontWeight:"bold"}}>Best Time to Visit</h6>
                </div>
                <div className="col-3">
                    {/*<h6>{bookingDets.best_time_to_visit}</h6>*/}
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h6 style={{fontWeight:"bold"}}>City Name</h6>
                </div>
                <div className="col-3">
                    <h6>{bookingDets.city_name?.city}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h6 style={{fontWeight:"bold"}}>Country Name</h6>
                </div>
                <div className="col-3">
                    <h6>{bookingDets.city_name?.country}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h6 style={{fontWeight:"bold"}}>About the Place</h6>
                </div>
                <div className="col-8">
                    <h6>{bookingDets.place_description}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h6 style={{fontWeight:"bold"}}>Places to Eat</h6>
                </div>
                <div className="col-8">
                    <h6>{bookingDets.places_to_eat}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h6 style={{fontWeight:"bold"}}>Places to See</h6>
                </div>
                <div className="col-8">
                    <h6>{bookingDets.places_to_see}</h6>
                </div>
            </div>
            {/*<hr />*/}
            {/*<div>*/}
            {/*    <h5>Package Itinerary</h5>*/}
            {/*    {bookingDets.itinerary}*/}
            {/*</div>*/}
            {/*<hr />*/}
            {/*<div className="row">*/}
            {/*    <div className="col-6">*/}
            {/*        <h5>Date of Departure</h5>*/}
            {/*        {bookingDets?.date_of_travel?.date_of_departure}*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*        <h5>Date of Arrival</h5>*/}
            {/*        {bookingDets?.date_of_travel?.date_of_arrival}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<hr />*/}
            {/*<div>*/}
            {/*    <h5>Things to Get</h5>*/}
            {/*    {bookingDets?.things_to_get}*/}
            {/*</div>*/}
            {/*<hr />*/}
            {/*<div className="row">*/}
            {/*    <div className="col-6">*/}
            {/*        <h5>Cost of the Trip</h5>*/}
            {/*        {bookingDets?.cost_of_trip}*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*        <h5>Difficulty Level</h5>*/}
            {/*        {bookingDets?.difficulty}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<hr />*/}
            {/*<div>*/}
            {/*    <h5>Inclusions</h5>*/}
            {/*    {bookingDets?.include?.food ? (*/}
            {/*        <i className="fa-solid fa-check"></i>*/}
            {/*    ) : (*/}
            {/*         <i className="fa-solid fa-xmark"></i>*/}
            {/*     )}*/}
            {/*    &nbsp; Food*/}
            {/*    <br />*/}
            {/*    {bookingDets?.include?.entrance_fee_rides ? (*/}
            {/*        <i className="fa-solid fa-check"></i>*/}
            {/*    ) : (*/}
            {/*         <i className="fa-solid fa-xmark"></i>*/}
            {/*     )}*/}
            {/*    &nbsp; Entrance Fee Rides*/}
            {/*    <br />*/}
            {/*    {bookingDets?.include?.transport_from_home ? (*/}
            {/*        <i className="fa-solid fa-check"></i>*/}
            {/*    ) : (*/}
            {/*         <i className="fa-solid fa-xmark"></i>*/}
            {/*     )}*/}
            {/*    &nbsp; Transport From Home*/}
            {/*    <br />*/}
            {/*    {bookingDets?.include?.private_transport ? (*/}
            {/*        <i className="fa-solid fa-check"></i>*/}
            {/*    ) : (*/}
            {/*         <i className="fa-solid fa-xmark"></i>*/}
            {/*     )}*/}
            {/*    &nbsp; Private Transport*/}
            {/*    <br />*/}
            {/*    {bookingDets?.include?.ac_vehicle ? (*/}
            {/*        <i className="fa-solid fa-check"></i>*/}
            {/*    ) : (*/}
            {/*         <i className="fa-solid fa-xmark"></i>*/}
            {/*     )}*/}
            {/*    &nbsp; AC Vehicle*/}
            {/*    <br />*/}
            {/*</div>*/}
            {/*<hr />*/}
            {/*<div className="row">*/}
            {/*    <div className="col-6">*/}
            {/*        <h5>Pick Up Location</h5>*/}
            {/*        {bookingDets?.pickup}*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*        <h5>Drop Off Location</h5>*/}
            {/*        {bookingDets?.drop}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};
export default MyBucketListComponent;

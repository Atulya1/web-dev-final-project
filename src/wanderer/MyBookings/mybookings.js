import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {addBooking, addUpcomingTrip} from "../../services/wanderer-service";
import {useSelector} from "react-redux";

const MyBookingsComponent = ({
                                mybooking = {
                                    _id:"232",
                                    city_id:"12432",
                                    place_id:"23232",
                                    city_name:"Hyderabad",
                                    date_of_travel: {
                                        date_of_departure: "04-11-1999",
                                        date_of_arrival: "04-11-1999"
                                    },
                                    itinerary: [],
                                    cost_of_trip: 500,
                                    difficulty: "Tough",
                                    things_to_get: [],
                                    include: {
                                        food: true,
                                        entrance_fee_rides:false,
                                        transport_from_home: true,
                                        private_transport: true,
                                        ac_vehicle: true
                                    },
                                    pickup: "23 Highland",
                                    drop: "Backbay"
                                },
                            }) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <h2>{mybooking.city_name}</h2></div>
            </div>
            <hr/>
            <div>
                <h5>Package Itinerary</h5>
                {mybooking.itinerary}
            </div>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <h5>Date of Departure</h5>
                    {mybooking.date_of_travel.date_of_departure}
                </div>
                <div className="col-6">
                    <h5>Date of Arrival</h5>
                    {mybooking.date_of_travel.date_of_arrival}
                </div>
            </div>
            <hr/>
            <div>
                <h5>Things to Get</h5>
                {mybooking.things_to_get}
            </div>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <h5>Cost of the Trip</h5>
                    {mybooking.cost_of_trip}
                </div>
                <div className="col-6">
                    <h5>Difficulty Level</h5>
                    {mybooking.difficulty}
                </div>
            </div>
            <hr/>
            <div>
                <h5>Inclusions</h5>
                {mybooking.include.food ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Food
                <br/>
                {mybooking.include.entrance_fee_rides ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Entrance Fee Rides
                <br/>
                {mybooking.include.transport_from_home ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Transport From Home
                <br/>
                {mybooking.include.private_transport ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Private Transport
                <br/>
                {mybooking.include.ac_vehicle ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                AC Vehicle
                <br/>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <h5>Pick Up Location</h5>
                    {mybooking.pickup}
                </div>
                <div className="col-6">
                    <h5>Drop Off Location</h5>
                    {mybooking.drop}
                </div>
            </div>
        </div>
    )
};
export default MyBookingsComponent;
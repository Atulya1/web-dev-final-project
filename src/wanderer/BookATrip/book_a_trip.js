import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {addBooking, addUpcomingTrip} from "../../services/wanderer-service";
import {useSelector} from "react-redux";

const BookATripComponent = ({
 tripDetails = {
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
    const [user_id, setUserId] = useState("");
    const [trip_id, setTripId] = useState("");
    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        if(currentUser) {
            setUserId(currentUser._id);
            setTripId(tripDetails._id);
        }
    },[])
    // setUserId(currentUser.message._id);
    // setTripId(tripDetails._id);
    // setUserId("232");

    const bookTrip = async () => {
        if(currentUser) {
            const response = await addBooking({user_id, trip_id});
            if (response.status == 200) {
                window.alert("Booking Done");
                navigate(`/wanderer/bookings`);
            } else {
                window.alert("error occured in booking");
            }
        }
        else {
            navigate(`/login`);
        }
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-9">
                <h2>{tripDetails.city_name}</h2></div>
                <div className="col-3">
                <button type="button" className="btn btn-danger px-4 float-end"
                        onClick={() => bookTrip()}
                >Book Now
                </button>
                </div>
            </div>
            <hr/>
            <div>
                <h5>Package Itinerary</h5>
                {tripDetails.itinerary}
            </div>
        <hr/>
            <div className="row">
                <div className="col-6">
                <h5>Date of Departure</h5>
                {tripDetails.date_of_travel.date_of_departure}
                </div>
                <div className="col-6">
                <h5>Date of Arrival</h5>
                {tripDetails.date_of_travel.date_of_arrival}
                </div>
            </div>
            <hr/>
            <div>
                <h5>Things to Get</h5>
                {tripDetails.things_to_get}
            </div>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <h5>Cost of the Trip</h5>
                    {tripDetails.cost_of_trip}
                </div>
                <div className="col-6">
                    <h5>Difficulty Level</h5>
                    {tripDetails.difficulty}
                </div>
            </div>
            <hr/>
            <div>
                <h5>Inclusions</h5>
                {tripDetails.include.food ? <i className="fa-solid fa-check"></i> : <i
                className="fa-solid fa-xmark"></i>}
                &nbsp;
                Food
                <br/>
                {tripDetails.include.entrance_fee_rides ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Entrance Fee Rides
                <br/>
                {tripDetails.include.transport_from_home ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Transport From Home
                <br/>
                {tripDetails.include.private_transport ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                Private Transport
                <br/>
                {tripDetails.include.ac_vehicle ? <i className="fa-solid fa-check"></i> : <i
                    className="fa-solid fa-xmark"></i>}
                &nbsp;
                AC Vehicle
                <br/>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <h5>Pick Up Location</h5>
                    {tripDetails.pickup}
                </div>
                <div className="col-6">
                    <h5>Drop Off Location</h5>
                    {tripDetails.drop}
                </div>
            </div>
        </div>
    )
};
export default BookATripComponent;
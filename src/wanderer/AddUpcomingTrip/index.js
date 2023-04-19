import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";
import {addUpcomingTrip, registerUser} from "../../services/wanderer-service";
import {ImportantDevices} from "@mui/icons-material";
import {AddUpcomingTrip} from "../../services/wanderer-service";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";

const initialValue = {
    city_id: '',
    place_id: '',
    city_name: '',
    itinerary: '',
    cost_of_trip: '',
    difficulty: '',
    things_to_get: '',
    food:'',
    entrance_fee_rides:'',
    transport_from_home:'',
    private_transport:'',
    ac_vehicle:'',
    pickup: '',
    drop: '',
    date_of_departure: '',
    date_of_arrival: ''
}

const UpcomingTripsComponent = () => {

    const [address, setAddress] = React.useState("");
    const [placeId, setPlaceId] = React.useState("");
    const [upcomingTrip, setUpcomingTrip] = useState(initialValue);
    const {
        city_id,
        place_id,
        city_name,
        itinerary,
        cost_of_trip,
        difficulty,
        things_to_get,
        food,
        entrance_fee_rides,
        transport_from_home,
        private_transport,
        ac_vehicle,
        pickup,
        drop,
        date_of_departure,
        date_of_arrival
    } = upcomingTrip;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        console.log({[e.target.name]: e.target.value});
        setUpcomingTrip({...upcomingTrip, [e.target.name]: e.target.value})
    }

    const handleCheckboxChange = (e) => {
        console.log({[e.target.name]: e.target.checked});
        setUpcomingTrip({...upcomingTrip, [e.target.name]: e.target.checked})
    }
    const addTrip = async () => {
        console.log(upcomingTrip);
        const response = await addUpcomingTrip(upcomingTrip);
        console.log(response.data.status);
        if(response.data.status == 200) {
            console.log(response.data.message._id);
            window.alert("Trip Added");
            navigate(`/`);
        } else {
            window.alert("error occured");
        }
    }
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        console.log(results[0].place_id);
        setAddress(value);
        setPlaceId(results[0].place_id);
        upcomingTrip.city_name = results[0].formatted_address;
        upcomingTrip.place_id = results[0].place_id;
        //await getData(results[0].place_id);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card-group mb-0">
                        <div className="card p-4">
                            <div className="card-body">
                                <p className="text-muted">Create Upcoming Trip</p>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                    <PlacesAutocomplete
                                        value={address}
                                        onChange={setAddress}
                                        searchOptions={{ types: ['locality', 'country'] }}
                                        onSelect={handleSelect}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div>
                                                <div className="row">
                                                    <div className="col-12 position-relative mb-1">
                                                        <input {...getInputProps({ placeholder: "Type address" })}
                                                               className="form-control"/>
                                                        <i className="bi bi-search position-absolute wd-nudge-up"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    {loading ? <div>...loading</div> : null}

                                                    {suggestions.map(suggestion => {
                                                        const style = {
                                                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                                            "position":"relative",
                                                            "z-index": "50",
                                                            "margin": "0px",
                                                            "opacity": "10"
                                                        };
                                                        return (
                                                            <div {...getSuggestionItemProps(suggestion, { style })}>
                                                                {suggestion.description}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                    <input type="text" className="form-control"
                                           placeholder="place_id" onChange={(e) => onValueChange(e)}
                                           name='place_id' value={placeId} id="place_id"/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                    <input type="textarea" className="form-control"
                                           placeholder="Itinerary"
                                           onChange={(e) => onValueChange(e)}
                                           name='itinerary' value={itinerary} id="itinerary"/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                    <input type="number" className="form-control"
                                           placeholder="Cost of the Trip"
                                           onChange={(e) => onValueChange(e)}
                                           name='cost_of_trip' value={cost_of_trip}
                                           id="cost_of_trip"/>
                                </div>
                                <div>
                                    <h6>Difficulty of the Challenge</h6>
                                    <div className="row">
                                        <div className="col-1">
                                            <input
                                                type="radio"
                                                name="difficulty"
                                                value="Easy"
                                                onChange={(e) => onValueChange(e)}
                                                checked={difficulty === "Easy"}
                                            /></div>
                                        <div className="option-box col-11">Easy</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <input
                                                type="radio"
                                                name="difficulty"
                                                value="Medium"
                                                onChange={(e) => onValueChange(e)}
                                                checked={difficulty === "Medium"}
                                            /></div>
                                        <div className="option-box col-11">Medium</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <input
                                                type="radio"
                                                name="difficulty"
                                                value="Tough"
                                                onChange={(e) => onValueChange(e)}
                                                checked={difficulty === "Tough"}
                                            /></div>
                                        <div className="option-box col-11">Tough</div>
                                    </div>
                                    <br/>
                                    <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                        <input type="text" className="form-control"
                                               placeholder="Things to get"
                                               onChange={(e) => onValueChange(e)}
                                               name='things_to_get' value={things_to_get} id="things_to_get"/>
                                    </div>
                                    <div>
                                        <h6>Includes:</h6>
                                        <div>
                                                <input
                                                    type="checkbox"
                                                    name = "food"
                                                    onChange={(e) => handleCheckboxChange(e)}
                                                    checked={food === true}
                                                />&nbsp;
                                                Food
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name = "entrance_fee_rides"
                                                onChange={(e) => handleCheckboxChange(e)}
                                                checked={entrance_fee_rides === true}
                                            />&nbsp;
                                            Entrance Fee Rides
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name = "transport_from_home"
                                                onChange={(e) => handleCheckboxChange(e)}
                                                checked={transport_from_home === true}
                                            />&nbsp;
                                            Transport From Home
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name = "private_transport"
                                                onChange={(e) => handleCheckboxChange(e)}
                                                checked={private_transport === true}
                                            />&nbsp;
                                            Private Transport
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name = "ac_vehicle"
                                                onChange={(e) => handleCheckboxChange(e)}
                                                checked={ac_vehicle === true}
                                            />&nbsp;
                                            AC Vehicle
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                        <input type="text" className="form-control"
                                               placeholder="Pick Up Location"
                                               onChange={(e) => onValueChange(e)}
                                               name='pickup' value={pickup} id="pickup"/>
                                    </div>
                                    <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                        <input type="text" className="form-control"
                                               placeholder="Drop Off Location"
                                               onChange={(e) => onValueChange(e)}
                                               name='drop' value={drop} id="drop"/>
                                    </div>
                                    <h6>Date of Departure</h6>
                                    <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                        <input type="date" className="form-control"
                                               onChange={(e) => onValueChange(e)}
                                               name='date_of_departure' value={date_of_departure} id="date_of_departure"/>
                                    </div>
                                    <h6>Date of Arrival</h6>
                                    <div className="input-group mb-3">
                                    <span className="input-group-addon"><i
                                        className="fa fa-user"></i></span>
                                        <input type="date" className="form-control"
                                               onChange={(e) => onValueChange(e)}
                                               name='date_of_arrival' value={date_of_arrival} id="date_of_arrival"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-primary px-4"
                                                    onClick={() => addTrip()}>Add
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UpcomingTripsComponent;

import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import Rating from "@mui/material/Rating";
import { registerUserExperience} from "../../services/wanderer-service";
const initialValue = {
    user_id: '',
    place_id: '',
    travel_place: '',
    travel_date: '',
    rating: '',
    heading: '',
    description: '',
    places_visited: '',
    date_of_review: '',
    estimated_expenses: 0,
    places_to_eat: '',
    places_to_shop: '',
    itinerary: ''
}

const UserExperienceComponent = () => {

    const [userExperience, setUserExperience] = useState(initialValue);
    const [address, setAddress] = React.useState("");
    const [formatedAddress, setFormatedAddress] = React.useState("");
    const [placeId, setPlaceId] = React.useState("");
    const { user_id, place_id, travel_place,
            rating,
            heading,
            description, places_visited, date_of_review, estimated_expenses, places_to_eat, places_to_shop, itinerary, travel_date} = userExperience;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        console.log({[e.target.name]: e.target.value});
        setUserExperience({...userExperience, [e.target.name]: e.target.value})
    }

    const addExperience = async() => {
        console.log(userExperience);
        console.log(placeId)
        console.log(formatedAddress);
        userExperience.place_id = placeId;
        userExperience.travel_place = formatedAddress;
        console.log(userExperience);
        const response = await registerUserExperience(userExperience);
        console.log(response.data);
        if(response.data.status == 200) {
            window.alert("experience saved");
            navigate('/experience');
        } else {
            window.alert("experience not saved");
        }
        //}
    }
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        console.log(results[0].formatted_address);
        setFormatedAddress(results[0].formatted_address);
        console.log(results[0].place_id);
        setAddress(value);
        setPlaceId(results[0].place_id);
    };

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div >
                    <div className="card-group mb-0">
                        <div className="card p-4">
                            <div className="card-body">
                                <p className="text-muted">Write Experience</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="User Id" onChange={(e) => onValueChange(e)} name='user_id' value={user_id} id="user_id" />
                                </div>
                                <div className="input-group mb-4">
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
                                                        <TextField
                                                            {...getInputProps({ placeholder: "Type address" })}
                                                            id="standard-search"
                                                            label="Search Address"
                                                            type="search"
                                                            variant="standard"
                                                            style={{ width: '745px' }}
                                                        />
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
                                    <input type="textarea" className="form-control" placeholder={formatedAddress? formatedAddress:"Travel Place"}  name='travel_place' value={formatedAddress} id="travel_place" />
                                </div>
                                <br/>
                                <h6>Rating for the Place</h6>
                                <div className="input-group mb-4">
                                    <Rating name="size-small" size="size-medium" onChange={(e) => onValueChange(e)} name='rating' value={rating} id="rating"/>
                                </div>
                                <TextField id="outlined-basic" label="Experience heading" onChange={(e) => onValueChange(e)} name='heading' value={heading} id="heading" variant="outlined" rows={3} style={{ width: '745px' }}/>
                                <br/>
                                <br/>
                                <TextField
                                    required
                                    id="description"
                                    label="Your Experience"
                                    multiline
                                    rows={4}
                                    style={{ width: '745px' }}
                                    onChange={(e) => onValueChange(e)}
                                    name='description'
                                    value={description}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    required
                                    // id="standard-required"
                                    label="Places Visited"
                                    variant="standard"
                                    style={{ width: '745px' }}
                                    onChange={(e) => onValueChange(e)} name='places_visited' value={places_visited} id="places_visited"
                                />

                                <br/>
                                <br/>
                                {/*<div className="input-group mb-3">*/}
                                {/*    <input type="text" className="form-control" placeholder="places_visited" onChange={(e) => onValueChange(e)} name='places_visited' value={places_visited} id="places_visited" />*/}
                                {/*</div>*/}
                                <h6>Date of Experience</h6>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="date_of_review" onChange={(e) => onValueChange(e)} name='date_of_review' value={date_of_review} id="date_of_review" />
                                </div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Estimated Expenses</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        onChange={(e) => onValueChange(e)} name='estimated_expenses' value={estimated_expenses} id="estimated_expenses"
                                    />
                                </FormControl>
                                <br/>
                                <TextField
                                    required
                                    // id="standard-required"
                                    label="Places to Eat"
                                    variant="standard"
                                    style={{ width: '745px' }}
                                    onChange={(e) => onValueChange(e)} name='places_to_eat' value={places_to_eat} id="places_to_eat"
                                />
                                <TextField
                                    required
                                    // id="standard-required"
                                    label="Places to Shop"
                                    variant="standard"
                                    style={{ width: '745px' }}
                                    onChange={(e) => onValueChange(e)} name='places_to_shop' value={places_to_shop} id="places_to_shop"
                                />
                                <br/>
                                <br/>
                                <TextField
                                    required
                                    id="itinerary"
                                    label="Itinerary"
                                    multiline
                                    rows={4}
                                    style={{ width: '745px' }}
                                    onChange={(e) => onValueChange(e)}
                                    name='itinerary'
                                    value={itinerary}
                                />
                                <br/>
                                <br/>
                                <h6>Travel Date</h6>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="travel_date" onChange={(e) => onValueChange(e)} name='travel_date' value={travel_date} id="travel_date" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-primary px-4" onClick={() => addExperience()}>Add Experience</button>
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
export default UserExperienceComponent;
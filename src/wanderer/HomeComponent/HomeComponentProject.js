import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySuggest from "../CitySuggestions";
import UserReaction from "../UserReactions/user-reaction";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
import {useSelector} from "react-redux";
import {addBucketList, getCityDetailsByPlaceId} from "../../services/wanderer-service";

const HomeComponentProject = () => {
    const [address, setAddress] = useState("");
    const [photos, setPhotos] = useState(null);
    const [placeId, setPlaceId] = useState("");
    const [user_id, setUserId] = React.useState("");
    const [city_id, setCityId] = React.useState("");

    const [coordinates, setCoordinates] = useState({
                                                       lat: null,
                                                       lng: null,
                                                   });

    // Use useEffect to make API request when placeId changes
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/tuits/getPhotos/${placeId}`
                );
                setPhotos(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        if (placeId !== "") {
            fetchData();
        }
    }, [placeId]);



    // Function to handle place selection
    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        setPlaceId(results[0].place_id);
    };

    const { currentUser } = useSelector((state) => state.user);

    async function handleBookmarks() {
        console.log("place ID",placeId);
        const response = await getCityDetailsByPlaceId(placeId);
        console.log("city id",response.data._id);
        console.log("current user",currentUser);
        setCityId(response.data._id);
        if(currentUser) {
            setUserId(currentUser.message._id);}
        console.log("city id",city_id);
        const responsed = await addBucketList({city_id,user_id});
        console.log("city",responsed);
    };

    return (
        <>
            <div className="auto-complete-background">
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    searchOptions={{ types: ["locality", "country"] }}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <div className="search-bar-container">
                                <input
                                    {...getInputProps({ placeholder: "Type address" })}
                                    className="search-bar-input"
                                    style={{ position: "relative" }}
                                />
                                <i className="bi bi-search position-absolute wd-nudge-up"></i>
                            </div>
                            <div>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map((suggestion) => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#e6e6e6" : "#fff",
                                    };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, { style })}
                                            key={suggestion.placeId}
                                        >
                                            {suggestion.description}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>

            <div
                className="position-relative mb-2"
                style={{
                    height: "500px",
                    overflowX: "auto",
                    overflowY: "auto",
                }}
            >
                <div id="demo2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to="0"
                            className="active"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to="1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to="2"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        {photos === null ? (
                            <div className="carousel-item active">
                                <img
                                    src="../../Images/Boston2.jpeg"
                                    alt="boston1"
                                    className="w-100"
                                />
                            </div>
                        ) : (
                             photos.map((photo) => (
                                 <div className="carousel-item active">
                                     <img src={photo} alt="boston1" className="w-100" />
                                 </div>
                             ))
                         )}
                    </div>
                </div>
            </div>
            {/*<UserReaction coordinates={coordinates} />*/}
            <div className="container">
                <div className="row" style={{width:"1000px"}}>
                    <div className="row col-lg-4">
                        <div className="col-md-1 col-sm-6">
                            <i className="fa-regular fa-bookmark "
                               onClick= {() => handleBookmarks()}></i></div>
                        <div className="col-md-8 col-sm-6">
                            <h6>Add to BucketList</h6></div>
                    </div>
                    <div className="row col-lg-4">
                        <div className="col-md-1 col-sm-6">
                            <i className="fa-sharp fa-regular fa-thumbs-up"></i></div>
                        <div className="col-md-8 col-sm-6">
                            <h6>Like</h6>
                        </div>
                    </div>
                    <div className="row col-lg-4">
                        <div className="col-md-1 col-sm-6">
                            <i className="fa-regular fa-pen-to-square"></i></div>
                        <div className="col-md-8 col-sm-6">
                            <h6>Write a review</h6></div>
                    </div>
                </div>
                <hr/>
            </div>

            <CitySuggest />
        </>
    );
};

export default HomeComponentProject;

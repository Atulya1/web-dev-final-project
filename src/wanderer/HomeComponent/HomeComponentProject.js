import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySuggest from "../CitySuggestions";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
import {useSelector} from "react-redux";
import {addBucketList, getCityDetailsByPlaceId} from "../../services/wanderer-service";
import {Link} from "react-router-dom";
import TopIconsComponent from "../TopIcons";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Fab from '@mui/material/Fab';

const HomeComponentProject = () => {
    const [address, setAddress] = useState("");
    const [heartToggle, setToggle] = useState(true);
    const [photos, setPhotos] = useState(null);
    const [index, setIndex] = useState(2);
    const [searchText, setSearchText] = useState("");
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
        setSearchText(value);
        setAddress("");
    };

    const { currentUser } = useSelector((state) => state.user);

    async function handleBookmarks() {
        console.log("place ID",placeId);
        const response = await getCityDetailsByPlaceId(placeId);
        console.log(response)
        console.log("city id",response.data._id);
        console.log("current user",currentUser);
        const cityId =  response.data._id
        setCityId(response.data._id);
        if(currentUser) {
            setUserId(currentUser.message._id);}
        console.log("city id",city_id);
        const responsed = await addBucketList({cityId,user_id});
        console.log("city",responsed);
    };

    return (
        <>
            {
                currentUser &&
                <div>
                    <TopIconsComponent/>
                </div>
            }

            <br/>
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

            {
                searchText == "" ? (
                    <React.Fragment />
                ) : (
                    <div className="row">
                        <div className="col-10">
                            <h3 style={{paddingTop: "10px"}}>{searchText}</h3>
                        </div>
                        <div className="col-2">
                            <Fab aria-label="add" style={{float: "right"}} onClick={() => setToggle(!heartToggle)}>
                                {
                                    heartToggle ? (
                                        <i className="fa-regular fa-heart" style={{color: "black", fontSize: "2em"}}></i>
                                    ) :
                                    (
                                        <i className="fa-solid fa-heart" style={{color: "red", fontSize: "2em"}}></i>
                                    )
                                }
                            </Fab>
                        </div>
                    </div>
                )
            }

            <br/>

            {
                photos === null ? (
                    <React.Fragment />
                ) : (
                    <CustomCarosuel images={photos} index={index} setDefaultIndex={() => setIndex(0)}/>
                )
            }

            {/*<UserReaction coordinates={coordinates} />*/}


            <CitySuggest />
        </>
    );
};

function Item(props)
{
    return (
        <Paper style={{borderRadius: "21px"}}>
            <img src={props.item} alt="boston1" className="w-100" style={{height: "500px", borderRadius: "21px"}}/>
        </Paper>
    )
}

function CustomCarosuel(props) {
    return (
        <Carousel
            NextIcon={<i class="fa-solid fa-circle-chevron-right"></i>}
            PrevIcon={<i class="fa-solid fa-circle-chevron-left"></i>}
            swipe={true}
            index={props.index}
            onChange={props.setDefaultIndex}
        >
            {
                props.images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default HomeComponentProject;

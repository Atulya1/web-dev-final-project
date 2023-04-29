import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySuggest from "../CitySuggestions";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addBucketList, getCityDetailsByPlaceId} from "../../services/wanderer-service";
import {Link, useNavigate} from "react-router-dom";
import TopIconsComponent from "../TopIcons";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import {loginThunk} from "../../services/wanderer-thunk";
import * as wandererService from "../../services/wanderer-service";
import { useLocation } from 'react-router-dom';


function SearchComponentProject()  {
    const location = useLocation()
    const { place_id, search_text } = location.state
    const [address, setAddress] = useState("");
    const [heartToggle, setToggle] = useState(true);
    const [photos, setPhotos] = useState(null);
    const [url, setUrl] = useState("");
    const [index, setIndex] = useState(2);
    const [searchText, setSearchText] = useState("");
    const [placeId, setPlaceId] = useState("");
    const [user_id, setUserId] = React.useState("");
    const [city_id, setCityId] = React.useState("");
    const [cityDetails, setCityDetails] = React.useState(null);

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null,
    });
    const navigate = useNavigate();

    // Use useEffect to make API request when placeId changes
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/tuits/getPhotos/${place_id}`
                );
                const cityDetails = await wandererService.getCityDetailsByPlaceId(place_id);
                console.log(response.data);
                console.log("here",cityDetails.data);
                setPhotos(response.data.images);
                setCityDetails(cityDetails.data.message);
                setUrl(response.data.url);
            } catch (error) {
                console.error(error);
            }
        }
        if (place_id !== "") {
            fetchData();
        }
    }, [place_id]);


    // Function to handle place selection


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

    const dispatch = useDispatch();
    async function handleCurrentState(placeId, cityName) {
        console.log(placeId);
        setPlaceId(placeId);
        setSearchText(cityName);
    }

    return (
        <>

            <div>
                <TopIconsComponent/>
            </div>
            <br/>

            {
                search_text == "" ? (
                    <React.Fragment />
                ) : (
                    <div className="row">
                        <div className="col-10">
                            <h3 style={{paddingTop: "10px"}}>{search_text}</h3>
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
            { place_id && cityDetails ? (
                <div>
                    <h2>About {search_text}</h2>
                    <p>{cityDetails.place_description}</p>
                    <h4 style={{"margin-top":"2px"}}>Places to See</h4>
                    {cityDetails.places_to_see?.size !==0 ? <ul className="list-group">
                        { cityDetails.places_to_see?.map(i => (<li className="list-group-item list-group-item-primary" style={{"width": "50%"}}>{i}</li>))}
                    </ul> : ""}
                    <h4 style={{"margin-top":"2px"}}>Places to Eat</h4>
                    {cityDetails.places_to_eat?.size !==0 ? <ul className="list-group">
                        { cityDetails.places_to_eat?.map(i => (<li className="list-group-item list-group-item-success" style={{"width": "50%"}}>{i}</li>))}
                    </ul> : ""}
                    <h4 style={{"margin-top":"2px"}}>Best Time To Visit</h4>
                    {cityDetails.best_time_to_visit?.size !==0 ? <ul className="list-group">
                        { cityDetails.best_time_to_visit?.map(i => (<li className="list-group-item list-group-item-info" style={{"width": "50%"}}>{i}</li>))}
                    </ul> : ""}
                </div>
            ) : ""
            }
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

export default SearchComponentProject;

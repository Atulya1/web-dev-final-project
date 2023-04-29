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
import {
    addBucketList,
    getCityDetailsByPlaceId,
    getExperiencesByPlaceId, getExperiencesByUserId, getUserByUserId
} from "../../services/wanderer-service";
import {Link,useNavigate} from "react-router-dom";
import TopIconsComponent from "../TopIcons";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import {loginThunk} from "../../services/wanderer-thunk";
import * as wandererService from "../../services/wanderer-service";
import {Route, Routes} from "react-router";
import HomeExp from "../Experiences";
import HomeExperience from "../Experiences/home-experience";
import { useSearchParams } from "react-router-dom";
import SearchComponentProject from "./SearchResult";

const HomeComponentProject = ({
                                  citySuggest = {
                                      _id: 123,
                                      placeID: "ChIJOwg_06VPwokRYv534QaPC8g"
                                  },
                              }) => {
    const citiesSuggestions = useSelector((state) => state.CitySuggestions);
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
    const [userExperiences, setUserExperiences] = useState([]);

    const [coordinates, setCoordinates] = useState({
                                                       lat: null,
                                                       lng: null,
                                                   });

    const navigate = useNavigate();

    let [searchParams, setSearchParams] = useSearchParams();

    // Use useEffect to make API request when placeId changes
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/tuits/getPhotos/${placeId}`
                );
                const cityDetails = await wandererService.getCityDetailsByPlaceId(placeId);
                console.log(response.data);
                console.log(cityDetails);
                setPhotos(response.data.images);
                setCityDetails(cityDetails);
                setUrl(response.data.url);
            } catch (error) {
                console.error(error);
            }
        }
        async function fetchDataByPlaceId() {
            try {
                const response = await getExperiencesByPlaceId(placeId);
                setUserExperiences(response);
            } catch (error) {
                console.error(error);
            }
        }
        if (placeId !== "") {
            fetchData();
            fetchDataByPlaceId();
        }
    }, [placeId]);


    useEffect(() => {
        if(searchParams.has("searchText")) {
            handleSelect(searchParams.get("searchText"));
        }
    }, []);

    // Function to handle place selection
    const handleSelect = async (value) => {
        console.log(value);
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        setPlaceId(results[0].place_id);
        setSearchText(value);
        setAddress("");
        setSearchParams({searchText: value})
        console.log(citySuggest.placeID);
    };

    const { currentUser } = useSelector((state) => state.user);

    async function handleBucketList() {
        console.log("place ID",placeId);
        const response = await getCityDetailsByPlaceId(placeId);
        console.log("responsess",response);
        console.log("city id",response.data.message._id);
        console.log("current user",currentUser);
        const city_id =  response.data.message._id
        setCityId(response.data.message._id);
        if(currentUser) {
            setUserId(currentUser._id);
            console.log(currentUser._id);
            console.log("city id 2",city_id);
            const responsed = await addBucketList({city_id, user_id: currentUser._id});
            console.log("city",responsed);
        }
    };

    const dispatch = useDispatch();
    async function handleCurrentState(placeId, cityName) {
        console.log(placeId);
        setPlaceId(placeId);
        setSearchText(cityName);
    }
    const handleHeartClick = async (value) => {
        setToggle(!heartToggle);
        await handleBucketList();
        window.alert("Added to bucket list");
    }
    return (
        <div className="row">
            <div className="col-xl-9 col-lg-8">
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
                            <div className="col-8">
                                <h3 style={{paddingTop: "10px"}}>{searchText}</h3>
                            </div>
                            <div className="col-2">
                                <Link to={`/cityDetails/${placeId}`} state={{ place_id: placeId, search_text: searchText }}>
                                    <button type="button" class="btn btn-success mt-2 float-left">More Details</button>
                                </Link>
                            </div>
                            <div className="col-2">
                                <Fab aria-label="add" style={{float: "right"}} onClick={() => handleHeartClick()}>
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
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                        <tr>
                            <div className="image-container">
                                {citiesSuggestions.map((city) => (
                                    <div className="div-realtive">

                                        <img style={{"cursor":"pointer"}}
                                             height={250}
                                             width={250}
                                             alt={"avatarIcon"}
                                             src={`${city.imageURL}`}
                                             onClick={ () => handleCurrentState(city.placeID, city.cityName) }
                                        />

                                        <h1 className="text-position">{city.cityName}</h1>
                                    </div>
                                ))}
                            </div>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 d-sm-none d-md-none d-lg-block" style={{paddingTop:23}}>
                <ul className="list-group">
                    {
                        userExperiences?.map(experience =>
                                                 <HomeExperience
                                                     key={experience._id}
                                                     homeExperience={experience}/>
                        )
                    }
                </ul>
            </div>

        </div>
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
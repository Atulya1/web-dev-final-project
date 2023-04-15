import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import "./index.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cities from "./cities.json";
const CitySuggestion = ({
                            citySuggest = {
                                _id: 123,
                                placeID: 234,
                                imageURL:
                                    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AUjq9jne4pWM2oSP_1iOUNQFJMqI7jjWtbJTNG3kAcQV2rtYXj7hgEqxIkAG5mVeZ3uKFgCDOEYZDQDUEyOrmfviuqOEeMNQniuhkP4bTS0UGQySpFYzDKJbj_Af9TGmtvI15kje0fkyhnICICnxN4QAzsufY2HMzMtobHdF9AxgeLPc_mL2&key=AIzaSyDD0GxnUVXCqw-diJgj35DY_uOOVb8HJBE",
                                cityName: "Newyork",
                            },
                        }) => {
    return (
        <div className="div-realtive">
            <Link
                to={"/tuiter/experiencedetail/" + citySuggest._id}
                style={{ textDecoration: "none" }}
            >
                <img
                    height={250}
                    width={250}
                    alt={"avatarIcon"}
                    src={`${citySuggest.imageURL}`}
                />
            </Link>
            <h1 className="text-position">{citySuggest.cityName}</h1>
        </div>
    );
};
export default CitySuggestion;

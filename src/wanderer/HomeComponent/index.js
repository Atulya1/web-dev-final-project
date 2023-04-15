import React, {useEffect, useState} from "react";
import HomeComponentProject from "./HomeComponentProject";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import HomeCities from "./HomeProject.json";

const GlobalCities = () => {
    const [city, setCity] = useState();
    const cities = useSelector(
        (state) => state.Cities);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const city = HomeCities.filter(x => x.travel_place == params.id);
        window.scrollTo(0, 0)
        if(city.length > 0) {
            setCity(city[0]);
        } else {
            navigate("/");
        }

    }, [params.id]);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Cities</h3>
            </li>
            {
                <HomeComponentProject
                    key={params.id}
                    HomeProjectImage={city}
                />
            }
        </ul>
    );
};

export default GlobalCities;
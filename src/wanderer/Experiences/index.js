import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getExperiencesByUserId} from "../../services/wanderer-service";
import HomeExperience from "./home-experience";

const HomeExp = () => {
    const currentUser = useSelector(
        (state) => state.user);
    let response;

    const [userExperiences, setUserExperiences] = useState([]);

    async function CallUserExperiences() {
        response = await getExperiencesByUserId(currentUser.currentUser._id);
        console.log("data here",response);
        setUserExperiences(response);
    };

    useEffect(() => {
        CallUserExperiences();
    }, []);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Experiences</h3>
            </li>
            {
                userExperiences.map(experience =>
                    <HomeExperience
                        key={experience._id}
                        homeExperience={experience}/>
                )
            }
        </ul>
    );
};

export default HomeExp;
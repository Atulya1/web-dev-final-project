import React from "react";
import HomeExperience from "./home-experience"
import {useSelector} from "react-redux";

const HomeExp = () => {
    const experiences = useSelector(
        (state) => state.experience);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Experiences</h3>
            </li>
            {
                experiences.map(experience =>
                    <HomeExperience
                        key={experience._id}
                        homeExperience={experience}/>
                )
            }
        </ul>
    );
};

export default HomeExp;
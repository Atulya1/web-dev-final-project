import React from "react";
import DetailExperience from "../Experience-Detail/experience_detail";
import {useSelector} from "react-redux";

const DetailExpOfUser = () => {
    const experiencedetails = useSelector(
        (state) => state.experiencedetail);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Experiences</h3>
            </li>
            {
                experiencedetails.map(experience =>
                                    <DetailExperience
                                        key={experience._id}
                                        detailExperience={experience}/>
                )
            }
        </ul>
    );
};

export default DetailExpOfUser;
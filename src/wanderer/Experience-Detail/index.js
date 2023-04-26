import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {getExperiencesByExpId, getUserByUserId} from "../../services/wanderer-service";
import DetailExperience from "./experience_detail";
import {useLocation} from "react-router-dom";

const DetailExp = () => {
    const [experience, setExperience] = useState();
    const [experienceId, setExperienceId] = useState("");

   const params = useParams();

    async function fetchUserExpById(experienceID) {

        try {
            console.log("experiences fetched", experienceID);
            const response = await getExperiencesByExpId(experienceID);
            console.log("experiences fetched 2", response);
            setExperience(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        // if(experience_id != "") {
        const experience_id = params.id;
        console.log("location", experience_id);
        setExperienceId(experience_id);
        fetchUserExpById(experience_id);
        // }
    }, []);

    return(

        // <div>{experience.itinerary}</div>
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Detail Experiences</h3>
            </li>
            { experience &&
                <DetailExperience
                    key={experienceId}
                    detailExperience={experience}
                />
            }
        </ul>
        // <React.Fragment>
        //
        // </React.Fragment>
    );
};

export default DetailExp;
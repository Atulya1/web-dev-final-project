import React, {useEffect, useState} from "react";
import DetailExperience from "../Experience-Detail/experience_detail";
import {useSelector} from "react-redux";
import {getExperiencesByUserId} from "../../services/wanderer-service";
import {useNavigate} from "react-router-dom";

const DetailExpOfUser = () => {
    const { currentUser } = useSelector((state) => state.user);
    const nav = useNavigate();

    const [experiencedetails, setExperienceDetails] = useState([]);

    const profileData = useSelector(state => state.user);
    const profileID = profileData.currentUser._id;


    const fetchData = async () => {
        console.log("profile ID",profileID);
        const result = await getExperiencesByUserId(profileID);
        console.log("result",result);
        setExperienceDetails(result);
    }

    useEffect(() => {
        if(currentUser) {
            console.log("current user",profileData);
            fetchData();
        }
        else {
            nav('/wanderer/login');

        }

    },[]);

    return(
        (currentUser &&
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
        )
    );
};

export default DetailExpOfUser;
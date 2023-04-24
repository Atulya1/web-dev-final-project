import React, {useEffect} from "react";
import DetailExperience from "../Experience-Detail/experience_detail";
import {useDispatch, useSelector} from "react-redux";
import {getExperiences, getExperiencesByUserId} from "../../services/wanderer-service";
import {fetchExperiences} from "../Experience-Detail/experience_detail_reducer";
import {useNavigate} from "react-router-dom";

const DetailExpOfUser = () => {
    const experiencedetails = useSelector(
        (state) => state.experiencedetail);
    const { currentUser } = useSelector((state) => state.user);
    const nav = useNavigate();

    const profileData = useSelector(state => state.user);
    const profileID = profileData.currentUser._id;


    const dispatch = useDispatch();

    const fetchData = async () => {
        console.log("profile ID",profileID);
        const result = await getExperiencesByUserId(profileID);
        console.log("result",result);
        dispatch(fetchExperiences(result));
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
import React, {useEffect} from "react";
import DetailExperience from "../Experience-Detail/experience_detail";
import {useDispatch, useSelector} from "react-redux";
import {getExperiences, getExperiencesByUserId} from "../../services/wanderer-service";
import {fetchExperiences} from "../Experience-Detail/experience_detail_reducer";

const DetailExpOfUser = () => {
    const experiencedetails = useSelector(
        (state) => state.experiencedetail);

    const profileData = useSelector(state => state.user);
    const profileID = profileData.currentUser.user_id;


    const dispatch = useDispatch();

    const fetchData = async () => {
        const result = await getExperiencesByUserId(profileID);
        console.log(result);
        dispatch(fetchExperiences(result));
    }

    useEffect(() => {
        fetchData();
    },[]);

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
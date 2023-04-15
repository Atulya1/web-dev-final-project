import React, {useEffect, useState} from "react";
import DetailExperience from "./experience_detail"
import experienceData from "./experiencedetail.json";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

const DetailExp = () => {

    const [experience, setExperience] = useState();
    const experiences = useSelector(
        (state) => state.experiencedetail);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const exp = experienceData.filter(x => x._id == params.id);
        window.scrollTo(0, 0)
        if(exp.length > 0) {
            setExperience(exp[0]);
        } else {
            navigate("/");
        }

    }, [params.id]);

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Detail Experiences</h3>
            </li>
            {
                <DetailExperience
                    key={params.id}
                    detailExperience={experience}
                />
            }
        </ul>
    );
};

export default DetailExp;
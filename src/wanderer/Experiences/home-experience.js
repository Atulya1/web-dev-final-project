import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
const HomeExperience = (
    {
        homeExperience = {
            _id: 123,
            profileID: 234,
            name: "Chetana",
            travel_place: "Dallas",
            userAvtar: "chetana.png",
            travel_date: "3/08/2023",
            experience: {
                heading: "Found family away from home",
                description: "When I came to the US, I left my family in India. Though I was sad leaving them behind, I didn't know that I would find a family away from home. I had to travel to Dallas all the way from Boston though. It was forth the effort. I got so much love and care in Dallas that I forgot my friend Atul in Boston.",
                rating: 5
            },
            places_visited: [
                "Dallas",
                "Boston",
                "Pakistan"
            ],
            date_of_review: "timestamp",
            image: [

            ]
        }
    }
) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={44} width={48} alt={"avatarIcon"} src={`./Images/${homeExperience.userAvtar}`}/>
                </div>
                <div className="col-10">
                    <Link to={"/profile/" + homeExperience.profileID} style={{textDecoration:'none'}}><div className="fw-bold" style={{color:"black"}}>{homeExperience.name} </div></Link>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating name="read-only" value={homeExperience.experience.rating} readOnly />

                    </Box>
                    <div>
                        <Link to={"/explore/"+homeExperience.travel_place} style={{textDecoration:'none'}}><text className="Heading text-black fw-bold">{homeExperience.travel_place}</text></Link>
                        <br/>
                        <text className="Heading text-black">{homeExperience.travel_date}</text>
                    </div>
                    <div>
                       <Link to={"/experiencedetail/"+homeExperience._id} style={{textDecoration:'none'}}><text className="Heading text-black fw-bold">{homeExperience.experience.heading}</text></Link>
                        <br/>
                        <text className="Heading text-black">{homeExperience.experience.description}</text>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default HomeExperience;
import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {getUserByUserId} from "../../services/wanderer-service";
const HomeExperience = (
    {
        homeExperience = {
            user_id:"23424",
            travel_place: "Dallas",
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
        },

    }
) => {
    const [username, setUserName] = React.useState("");
    useEffect(() => {
    async function fetchUserNameByUserId() {

        try {
            const response = await getUserByUserId(homeExperience.user_id);
            console.log("username",response.username);
            setUserName(response.username);

        } catch (error) {
            console.error(error);
        }
    }
       fetchUserNameByUserId();
    }, [homeExperience.user_id]);

    const [reviewstring, setreviewstring] = useState(homeExperience.experience.description);

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={44} width={48} alt={"avatarIcon"} src={`../../Images/samantha.jpeg`}/>
                </div>
                <div className="col-10">
                    <Link to={"/profile/" + homeExperience.user_id} style={{textDecoration:'none'}}><div className="fw-bold" style={{color:"black"}}>hello</div></Link>
                    <div>
                        <Link to={"/experiencedetail/"+homeExperience._id} style={{textDecoration:'none'}}><text className="Heading text-black fw-bold">{homeExperience.experience.heading}</text></Link>
                        <br/>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Rating name="read-only" value={homeExperience.experience.rating} readOnly />

                        </Box>
                        <text className="Heading text-black">{homeExperience.travel_date}</text>
                    </div>


                    <div>
                        <Link to={"/explore/"+homeExperience.travel_place} style={{textDecoration:'none'}}><text className="Heading text-black fw-bold">{homeExperience.travel_place}</text></Link>
                        <br/>
                        <text className="Heading text-black" style={{"text-overflow": "ellipsis",
                            "white-space": "nowrap",
                            "display": "block",
                            "overflow": "hidden",
                            "width": "15em"}}>{reviewstring}</text>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default HomeExperience;
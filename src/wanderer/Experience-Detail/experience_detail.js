import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const DetailExperience = (
    {
        detailExperience = {
            "_id": 123,
            "profileID": 234,
            "name": "Chetana",
            "travel_place": "Dallas",
            "userAvtar": "chetana.png",
            "travel_date": "3/08/2023",
            "experience": {
                "heading": "Found family away from home",
                "description": "When I came to the US, I left my family in India. Though I was sad leaving them behind, I didn't know that I would find a family away from home. I had to travel to Dallas all the way from Boston though. It was forth the effort. I got so much love and care in Dallas.",
                "rating": 5
            },
            "places_visited": [
                "Dallas",
                "Boston",
                "Pakistan"
            ],
            "date_of_review": "timestamp",
            "image": [

            ],
            "cost_of_trip": "5000",
            "places_food_shop": [
                "Amorino",
                "JP Licks",
                "Olive Garden"
            ],
            "itinerary": "Wake up early and go"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={44} width={48} alt={"avatarIcon"} src={`../images/${detailExperience.userAvtar}`}/>
                </div>
                <div className="col-11">
                    <div className="row">
                    <text className="Heading text-black fw-bold">{detailExperience.experience.heading}</text>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating name="read-only" value={detailExperience.experience.rating} readOnly />

                    </Box>
                    </div>
                    <div className="fw-bold">{detailExperience.travel_place}&nbsp; - &nbsp;<text className="Heading text-black">{detailExperience.travel_date}</text> </div>
                    <img  height={400} width={750} alt={"avatarIcon"} src={`../Images/${detailExperience.image}`}/>
                    <div>
                        <text className="Heading text-black fw-bold">{detailExperience.name}</text>
                        <br/>
                    </div>
                    <div>
                        <text className="Heading text-black">{detailExperience.experience.description}</text>
                    </div>
                    <span style={{fontWeight: "bold"}}>Places Visited: </span>
                    <div>
                        {detailExperience.places_visited?.map( x => {
                            return (
                                <React.Fragment>
                                    <span className="Heading text-black">{x}</span>
                                    <br/>
                                </React.Fragment>
                            )
                        }
                        )}
                    </div>
                    <div>
                        <text className="Heading text-black fw-bold">Cost of your trip - </text>
                        <text className="Heading text-black">{detailExperience.cost_of_trip}</text>
                        <br/>
                    </div>
                    <div>
                        <text className="Heading text-black fw-bold">Places to eat and shop: </text>
                        <br/>
                        {detailExperience.places_to_eat?.map( x => {
                                                                  return (
                                                                      <React.Fragment>
                                                                          <span className="Heading text-black">{x}</span>
                                                                          <br/>
                                                                      </React.Fragment>
                                                                  )
                                                              }
                        )}
                        {detailExperience.places_to_shop?.map( x => {
                                                                 return (
                                                                     <React.Fragment>
                                                                         <span className="Heading text-black">{x}</span>
                                                                         <br/>
                                                                     </React.Fragment>
                                                                 )
                                                             }
                        )}
                    </div>
                    <div>
                        <text className="Heading text-black fw-bold">Itinerary </text>
                        <br/>
                        <text className="Heading text-black">{detailExperience.itinerary}</text>
                        <br/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default DetailExperience;
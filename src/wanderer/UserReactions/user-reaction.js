import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
const UserReaction = ({
                            citySuggest = {
                                _id: 123,
                                placeID: 234,
                                imageURL:
                                    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AUjq9jne4pWM2oSP_1iOUNQFJMqI7jjWtbJTNG3kAcQV2rtYXj7hgEqxIkAG5mVeZ3uKFgCDOEYZDQDUEyOrmfviuqOEeMNQniuhkP4bTS0UGQySpFYzDKJbj_Af9TGmtvI15kje0fkyhnICICnxN4QAzsufY2HMzMtobHdF9AxgeLPc_mL2&key=AIzaSyDD0GxnUVXCqw-diJgj35DY_uOOVb8HJBE",
                                cityName: "Newyork",
                            },
                        }) => {
    return (
        <div className="container">
        <div className="row" style={{width:"1000px"}}>
            <div className="row col-lg-4">
                <div className="col-md-1 col-sm-6">
            <i className="fa-regular fa-bookmark "></i></div>
                <div className="col-md-8 col-sm-6">
                    <h6>Add to BucketList</h6></div>
            </div>
            <div className="row col-lg-4">
                <div className="col-md-1 col-sm-6">
                    <i className="fa-sharp fa-regular fa-thumbs-up"></i></div>
                <div className="col-md-8 col-sm-6">
                <h6>Like</h6>
                </div>
            </div>
            <div className="row col-lg-4">
                <div className="col-md-1 col-sm-6">
                    <i className="fa-regular fa-pen-to-square"></i></div>
                <div className="col-md-8 col-sm-6">
                    <h6>Write a review</h6></div>
            </div>
        </div>
            <hr/>
        </div>

    );
};
export default UserReaction;

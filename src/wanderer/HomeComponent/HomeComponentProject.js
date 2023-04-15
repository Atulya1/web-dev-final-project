import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySuggest from "../CitySuggestions";
const HomeComponentProject = (
    {
        HomeProjectImage = {
            "_id": 123,
            "profileID": 234,
            "travel_place": "Dallas",
            "image": "Boston1.webp"
        }
    }
) => {
    return(
        <>
            <div className="row">
                <div className="col-12 position-relative mb-1">
                    <input placeholder="Search City"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
            </div>

            <div className="position-relative mb-2">
                <div id="demo2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" ></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../../Images/Boston2.jpeg" alt="boston1" className="w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../../Images/Boston1.webp" alt="boston2" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../../Images/Boston2.jpeg" alt="boston3" className="d-block w-100"/>
                        </div>
                        <h1 className="position-absolute wd-nudge-up text-white">
                            Boston</h1>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
            <CitySuggest/>
            {/*<PostSummaryList/>*/}
        </>
    );
};
export default HomeComponentProject;
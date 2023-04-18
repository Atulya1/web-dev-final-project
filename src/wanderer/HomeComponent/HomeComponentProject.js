import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySuggest from "../CitySuggestions";
import "./index.css";
import UserReaction from "../UserReactions/user-reaction"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import axios from "axios";
const HomeComponentProject = () => {
// useEffect(() => {
//     getData(placeId);
// }, []);
    const [address, setAddress] = React.useState("");
    const [photos, setPhotos] = React.useState(null);
    const [placeId, setPlaceId] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
                                                             lat: null,
                                                             lng: null
                                                         });

    async function getData(placeId) {
        try {
            const response = await axios.get(
                `http://localhost:4000/api/tuits/getPhotos/${placeId}`);
            const json = await response
            console.log(json);
            setPhotos(json.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log(latLng);
        console.log(results[0].place_id);
        setAddress(value);
        setCoordinates(latLng);
        setPlaceId(results[0].place_id);
        await getData(results[0].place_id);
    };
    return(
        <>
            <div className="position-relative mb-2" style={{"height": "500px",
                "overflow-x": "auto",
                "overflow-y": "auto"}}>
                <div id="demo2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" ></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        {
                           photos == null ? <div className="carousel-item active">
                               <img src="../../Images/Boston2.jpeg" alt="boston1" className="w-100"/>
                           </div> : photos.map((photo) => <div className="carousel-item active">
                                <img src={photo} alt="boston1" className="w-100"/>
                            </div>)
                        }
                        <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            searchOptions={{ types: ['locality', 'country'] }}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <div className="row">
                                        <div className="col-12 position-relative mb-1">
                                            <input {...getInputProps({ placeholder: "Type address" })}
                                                   className="form-control rounded-pill ps-5" style={{"position":"relative"}}/>
                                            <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                                        </div>
                                    </div>
                                    <div>
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                                "position":"relative",
                                                "z-index": "50",
                                                "margin": "0px",
                                                "opacity": "10"
                                            };

                                            return (
                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                        {/*<h1 className="position-absolute wd-nudge-up text-white">*/}
                        {/*    Boston</h1>*/}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
            <UserReaction/>
            <CitySuggest/>
            {/*<PostSummaryList/>*/}
        </>
    );
};
export default HomeComponentProject;

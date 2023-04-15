import React from "react";
import {useSelector} from "react-redux";
import CitySuggestion from "./city_suggestions";
const CitySuggest = () => {
    const citiesSuggestions = useSelector(
        (state) => state.CitySuggestions);
    return(
        <div className="table-responsive">
            <table className="table">
                <tbody>
                <tr>
            {
                citiesSuggestions.map(city =>
                                    <CitySuggestion
                                        key={citiesSuggestions._id}
                                        citySuggest={city}/>
                )
            }
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CitySuggest;
import React, {useEffect, useState} from "react";
import {getUpcomingTrip} from "../../services/wanderer-service";
import BookATripComponent from "./book_a_trip";
const BookATrip = () => {

    const [upcomingTrips, setupcomingTrips] = useState([]);

    async function CallUpcomingTrip() {
        const response = await getUpcomingTrip();
        setupcomingTrips(response);
    };

    useEffect(() => {
        CallUpcomingTrip();
        console.log("trip",upcomingTrips);
    }, []);


    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Book a Trip</h3>
                    {upcomingTrips.map((trip) => (
                        <li className="list-group-item">
                        <BookATripComponent
                            key={upcomingTrips._id}
                            tripDetails={trip}
                        />
                        </li>
                    ))}

            </li>

        </ul>
    );
};

export default BookATrip;
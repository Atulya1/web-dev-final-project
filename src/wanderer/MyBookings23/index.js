import React, {useEffect, useState} from "react";
import {findMyBookings, getUpcomingTrip} from "../../services/wanderer-service";
import {useSelector} from "react-redux";
import MyBookingsComponent from "./mybookings";
// const MyBookings = () => {
//
//     const [userId, setUserId] = useState("");
//     const { currentUser } = useSelector((state) => state.user);
//     const [myBookings, setMyBookings] = useState([]);
//
//
//
//     async function getMyBookings() {
//         console.log("userID",userId);
//         const response = await findMyBookings(userId);
//         console.log("booking details",response);
//         setMyBookings(response.data);
//     };
//
//     useEffect(() => {
//         console.log("current user",currentUser);
//         if(currentUser) {
//             setUserId(currentUser.message._id);
//             console.log(currentUser.message._id);
//         }
//         getMyBookings();
//         console.log("bookings",myBookings);
//     },[])

const MyBookings = () => {
    const [userId, setUserId] = useState("");
    const { currentUser } = useSelector((state) => state.user);
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        async function getMyBookings() {
            const response = await findMyBookings(userId);
            console.log("booking details", response);
            setMyBookings(response?.data);
        }
        if (currentUser) {
            setUserId(currentUser?.message._id);
        }
        if(userId?.length>0)
            getMyBookings();

    }, [currentUser, setMyBookings, userId]);

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Book a Trip</h3>
                {
                    myBookings.map((booking) => (
                    <li className="list-group-item">
                    <MyBookingsComponent
                    key={booking._id}
                    mybooking={booking}
                    />
                     </li>
                     ))}
                {/*{myBookings.map((booking) => (*/}
                {/*    <li className="list-group-item">*/}
                {/*        <MyBookingsComponent*/}
                {/*            key={myBookings._id}*/}
                {/*            mybooking={booking}*/}
                {/*        />*/}
                {/*    </li>*/}
                {/*))}*/}

            </li>

        </ul>
    );
};

export default MyBookings;
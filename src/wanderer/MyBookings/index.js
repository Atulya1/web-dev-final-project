import React, { useEffect, useState } from "react";
import {
  findMyBookings,
  getUpcomingTrip,
} from "../../services/wanderer-service";
import { useSelector } from "react-redux";
import MyBookingsComponent from "./mybookings";
import "./mybookings.css";
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
    if (userId?.length > 0) getMyBookings();
  }, [currentUser, setMyBookings, userId]);

  return (
    <ul className="list-group">
      {myBookings.length > 0 ? (
        myBookings.map((booking) => (
          <li className="list-group-item padding-bottom-10">
            {console.log("booking", booking)}
            <MyBookingsComponent key={myBookings._id} mybooking={booking} />
          </li>
        ))
      ) : (
        <p>No Bookings</p>
      )}
    </ul>
  );
};

export default MyBookings;

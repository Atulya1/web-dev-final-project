import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import {logoutThunk} from "../../services/wanderer-thunk";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <div className="list-group">
            <a className="list-group-item " href="/#"><i className="fa-solid fa-plane"></i></a>
            <Link to="/" className={`list-group-item ${active === 'home' || active === "" ?'active':''}`}>
                <i className="fas fa-home"></i> Home</Link>
            <Link to="login" className={`list-group-item ${active === 'login'?'active':''}`}><i
                className="fa-sharp fa-solid fa-right-to-bracket"></i>   Login / Register </Link>
            <Link to="experience" className={`list-group-item ${active === 'experience'?'active':''}`}><i
                className="fa-solid fa-mountain-sun"></i> My Experiences</Link>
            <Link to="/wanderer/bucketList" className={`list-group-item ${active === 'bucketlist'?'active':''}`}><i
                className="fa-solid fa-list"></i> Bucket List</Link>
            <Link to="/wanderer/bookatrip" className={`list-group-item ${active === 'messages'?'active':''}`}><i className="fas fa-envelope"></i> Book a Trip</Link>
            <Link to="/wanderer/reviews" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="fa-regular fa-pen-to-square"></i> Write an Experience</Link>
            <Link to="/wanderer/bookings" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="fas fa-bookmark"></i> My Bookings</Link>
            <Link to="/wanderer/upcomingTrips" className={`list-group-item ${active === 'lists'?'active':''}`}><i className="fas fa-list-ul"></i> Upcoming trips</Link>

            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}
                className="btn btn-primary"
            >
                Logout
            </button>
        </div>
    );
};
export default NavigationSidebar;
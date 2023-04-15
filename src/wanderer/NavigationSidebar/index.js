import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="list-group">
            <a className="list-group-item " href="/#"><i className="fa-solid fa-plane"></i></a>
            <Link to="/wanderer/" className={`list-group-item ${active === 'home' || active === "" ?'active':''}`}>
                <i className="fas fa-home"></i> Home</Link>
            <Link to="/wanderer/experience" className={`list-group-item ${active === 'explore'?'active':''}`}><i
                className="fa-solid fa-mountain-sun"></i> My Experiences</Link>
            <Link to="/wanderer/bucketList" className={`list-group-item ${active === 'notifications'?'active':''}`}><i
                className="fa-solid fa-list"></i> Bucket List</Link>
            <Link to="/wanderer/trips" className={`list-group-item ${active === 'messages'?'active':''}`}><i className="fas fa-envelope"></i> Book a Trip</Link>
            <Link to="/wanderer/reviews" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="fas fa-bookmark"></i> Write a Review</Link>
            <Link to="/wanderer/bookings" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="fas fa-bookmark"></i> My Bookings</Link>
            <Link to="/wanderer/upcomingTrips" className={`list-group-item ${active === 'lists'?'active':''}`}><i className="fas fa-list-ul"></i> Upcoming trips</Link>
        </div>
    );
};
export default NavigationSidebar;
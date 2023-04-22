import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";
import {logoutThunk} from "../../services/wanderer-thunk";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    return(
        <React.Fragment>
        <div style={{paddingLeft:20,paddingTop:23,position:"fixed"}}>
            <h3 style={{color:"hotpink",fontStyle:"italic"}} >Wanderer</h3>
        {/*</div>*/}
        {/*<div className="list-group" style={{ height:30,paddingTop:20,position:"fixed"}}>*/}
            <Link to="/" className={`list-group-item ${active === 'home' || active === "" ?'active':''} border-0` } style={{padding:'30px 0',backgroundColor:"transparent",fontWeight:"bold"}} >
                <i className="fas fa-home"></i> Home</Link>
            {/*<Link to="login" className={`list-group-item ${active === 'login'?'active':''}border-0`}style={{padding:30,backgroundColor:"transparent"}}><i*/}
            {/*    className="fa-sharp fa-solid fa-right-to-bracket"></i>   Login / Register </Link>*/}
            {/*<Link to="experience" className={`list-group-item ${active === 'experience'?'active':''}`}><i*/}
            {/*    className="fa-solid fa-mountain-sun"></i> My Experiences</Link>*/}
            {/*<Link to="/wanderer/bucketList" className={`list-group-item ${active === 'bucketlist'?'active':''}`}><i*/}
            {/*    className="fa-solid fa-list"></i> Bucket List</Link>*/}
            {/*<Link to="/wanderer/bookatrip" className={`list-group-item ${active === 'messages'?'active':''}`}><i className="fas fa-envelope"></i> Book a Trip</Link>*/}
            <Link to="/wanderer/reviews" className={`list-group-item ${active === 'bookmarks'?'active':''} border-0`} style={{padding:'30px 0',backgroundColor:"transparent",fontWeight:"bold"}}><i className="fa-regular fa-pen-to-square"></i> Write an Experience</Link>
            <Link to="/wanderer/bookings" className={`list-group-item ${active === 'bookmarks'?'active':''}border-0`} style={{padding:'30px 0',backgroundColor:"transparent",fontWeight:"bold"}}><i className="fas fa-bookmark"></i>&nbsp; My Bookings</Link>
            <Link to="/wanderer/upcomingTrips" className={`list-group-item ${active === 'lists'?'active':''} border-0`} style={{padding:'30px 0',backgroundColor:"transparent",fontWeight:"bold"}}><i className="fas fa-list-ul"></i>&nbsp; Upcoming trips</Link>
            {
                currentUser ? (
                    <Link to="/wanderer/profile" className={`list-group-item ${active === 'lists'?'active':''} border-0`} style={{padding:'30px 0',backgroundColor:"transparent",fontWeight:"bold"}}><i className="fas fa-user"></i> &nbsp;My Profile</Link>
                ) : (
                    <React.Fragment />
                )
            }

            <br/>

            {
                currentUser ? (
                                <button
                                    onClick={() => {
                                        dispatch(logoutThunk());
                                        navigate("/");
                                    }}
                                    className="btn btn-outline-dark"
                                    style={{width:200,fontWeight:"bold",borderRadius:12}}
                                >
                                    Logout
                                </button>
                            ) :
                (
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="btn btn-primary"
                        style={{width:200,borderRadius:12}}
                    >
                        Login / Register
                    </button>
                )
            }
        </div>
        </React.Fragment>
    );
};
export default NavigationSidebar;
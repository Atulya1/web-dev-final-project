import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {addBooking} from "../../services/wanderer-service";
import {useNavigate} from "react-router-dom";

function TopIconsComponent() {

    const navigate = useNavigate();
    const goto = async () => {
            navigate(`/experience`);
    };

    const gotobooktrip = async () => {
        navigate(`/wanderer/bookatrip`);
    };

    const gotobucketlist = async () => {
        navigate(`/wanderer/bucketList`);
    };

    return (
        <div className="row">
            <div className="col-4">
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" style={{width:305, color:"black",borderRadius:12,borderColor:"black",fontWeight:"bold",height:45}} onClick={() => goto()}>My Experiences</Button>
                </Stack>
            </div>
            <div className="col-4">
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined"  style={{width:305, color:"black",borderRadius:12,borderColor:"black",fontWeight:"bold",height:45}} onClick={() => gotobooktrip()}>Book a Trip</Button>
                </Stack>
            </div>
            <div className="col-4">
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" style={{width:305, color:"black",borderRadius:12,borderColor:"black",fontWeight:"bold",height:45}}onClick={() => gotobucketlist()}>My Bucket List</Button>
                </Stack>
            </div>
            <br/>
        </div>
    );
}

export default TopIconsComponent;
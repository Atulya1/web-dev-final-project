// import React, {useEffect, useState} from "react";
// import {findMyBookings, getBucketListItems, getUpcomingTrip} from "../../services/wanderer-service";
// import {useSelector} from "react-redux";
// const MyBucketList = () => {
//
//     const [user_id, setUserId] = useState("");
//     const { currentUser } = useSelector((state) => state.user);
//     const [myBucketList, setMyBucketList] = useState([]);
//
//     async function getMyBucketList() {
//         console.log("userID",user_id);
//         const response = await getBucketListItems(user_id);
//         console.log("bucketlist details",response.data);
//         setMyBucketList(response.data);
//     };
//
//     useEffect(() => {
//         console.log("current user",currentUser);
//         if(currentUser) {
//             setUserId(currentUser.message._id);
//             console.log(currentUser.message._id);
//         }
//         getMyBucketList();
//     },[])
//
//     return(
//         <ul className="list-group">
//             <li className="list-group-item">
//                 <h3>Bucket List Items</h3>
//                 {/*{*/}
//                 {/*    myBookings.map((booking) => (*/}
//                 {/*    <li className="list-group-item">*/}
//                 {/*    <MyBookingsComponent*/}
//                 {/*    key={myBookings._id}*/}
//                 {/*    mybooking={booking}*/}
//                 {/*    />*/}
//                 {/*    </li>*/}
//                 {/*    ))}*/}
//                 {/*{myBookings.map((booking) => (*/}
//                 {/*    <li className="list-group-item">*/}
//                 {/*        <MyBookingsComponent*/}
//                 {/*            key={myBookings._id}*/}
//                 {/*            mybooking={booking}*/}
//                 {/*        />*/}
//                 {/*    </li>*/}
//                 {/*))}*/}
//
//             </li>
//
//         </ul>
//     );
// };
//
// export default MyBucketList;


import React, { useEffect, useState } from "react";
import {
    findMyBookings, getBucketListItems,
    getUpcomingTrip,
} from "../../services/wanderer-service";
import { useSelector } from "react-redux";
import MyBucketListComponent from "./mybucketlist";
const MyBucketList = () => {
    const [userId, setUserId] = useState("");
    const { currentUser } = useSelector((state) => state.user);
    const [myBucketList, setmyBucketList] = useState([]);

    useEffect(() => {
        async function getMyBucketList() {
            const response = await getBucketListItems(userId);
            console.log("bucket list details", response);
            setmyBucketList(response?.data);
        }
        if (currentUser) {
            setUserId(currentUser?.message._id);
        }
        if (userId?.length > 0) getMyBucketList();
    }, [currentUser, setmyBucketList, userId]);

    return (
        <ul className="list-group">
            <li className="list-group-item ">
                <div>
                    <h5>My Bucket List</h5>
                </div>
            </li>

            {myBucketList.length > 0 ? (
                myBucketList.map((item) => (
                    <li className="list-group-item padding-bottom-10">
                        {console.log("bucket list", item)}
                        <MyBucketListComponent key={myBucketList._id} mybooking={item} />
                    </li>
                ))
            ) : (
                 <p>No Cities added to the BucketList</p>
             )}
        </ul>
    );
};

export default MyBucketList;

import axios from 'axios';

const API_BASE = "http://localhost:4000";
const TUITS_API = `${API_BASE}/api/user`;
const TRIPS_API = `${API_BASE}/api/trip`;
const BOOKING_API = `${API_BASE}/api/bookings`;
const CITY_API = `${API_BASE}/api/city`;
const BUCKET_LIST_API = `${API_BASE}/api/bucketList`;

export const loginUser = async (data) => {
    data = data || '';
    const response = await axios.post(`${TUITS_API}/checkLoginCredentials`, data);
    const user = response.data;
    return user;
}

export const logout = async () => {
    const response = await axios.post(`${TUITS_API}/logout`);
    const status = response.data;
    return status;
};

export const registerUserExperience = async (data) => {
    const experience = {rating: data.rating, heading: data.heading, description: data.description};
    console.log(experience);
    const updatedData = {user_id: data.user_id,
        place_id: data.place_id,
        travel_place: data.travel_place,
        travel_date: data.travel_date,
        experience: experience,
        places_visited: data.places_visited,
        date_of_review: data.date_of_review,
        estimated_expenses: data.estimated_expenses,
        places_to_eat: data.places_to_eat,
        places_to_shop: data.places_to_shop,
        itinerary: data.itinerary}
    console.log(updatedData);
    return await axios.post(`${TUITS_API}/addUserExperience`, updatedData);
}


 export const registerUser = async (data) => {
    const name = {firstName: data.firstName, lastName: data.lastName};
    const updatedData = {
        name: name, username: data.username,
        password: data.password,
        email: data.email,
        dob: data.dob,
        phone_number: data.phone_number
    }
    return await axios.post(`${TUITS_API}/addUser`, updatedData);
}

export const checkUserName = async (data) => {
    data = data || '';
    return await axios.post(`${TUITS_API}/checkUsername`, data);
}

export const addUpcomingTrip = async (data) => {
    const include = {
        food: true, entrance_fee_rides: false, transport_from_home: true,
        private_transport: true, ac_vehicle: true
    };
    const date_of_travel = {
        date_of_departure: data.date_of_departure,
        date_of_arrival: data.date_of_arrival
    };

    const updatedData = {
        city_id: data.city_id,
        place_id: data.place_id,
        city_name: data.city_name,
        itinerary: data.itinerary,
        cost_of_trip: data.cost_of_trip,
        difficulty: data.difficulty,
        things_to_get: data.things_to_get,
        include: include,
        pickup: data.pickup,
        drop: data.drop,
        date_of_travel: date_of_travel
    };


    return await axios.post(`${TRIPS_API}/addUpcomingTrip`, updatedData);
}

export const getUpcomingTrip = async () => {
    const response = await axios.get(`${TRIPS_API}/getUpcomingTrip`);
    const trip = response.data;
    return trip;
}

export const addBooking = async (data) => {
    data = data || '';
    const response = await axios.post(`${BOOKING_API}/addBookings`,data);
    const trip = response;
    console.log("chetana",trip);
    return trip;
}

export const addBucketList = async (data) => {
    data = data || '';
    console.log(data);
    const response = await axios.post(`${BUCKET_LIST_API}/addBucketListItem`,data);
    const item = response;
    console.log("chetana",item);
    return item;
}

// export const findMyBookings = async (data) => {
//     data = data || '';
//     console.log("user id",data);
//     const response = await axios.post(`${BOOKING_API}/findBookingsByUserId`,data);
//     const trip = response;
//     return trip;
// }

export const findMyBookings = async (data) => {
    data = data || '';
    console.log("user id",data);
    const response = await axios.get(`${BOOKING_API}/findBookingsByUserId/${data}`);
    const trip = response;
    return trip;
}

export const getCityDetailsByPlaceId = async (place_id) => {
    console.log("place id",place_id);
    const response = await axios.get(`${CITY_API}/getCityDetailsByPlaceId/${place_id}`);
    console.log(response.data);
    if(response.data.status == 404) {
        const cityDetails = {
            city_name: {
                city: "",
                country: ""
            },
            geolocation: {
                latitude: "",
                longitude: ""
            },
            place_id: "",
            place_description: "",
            best_time_to_visit: [],
            places_to_see: [],
            places_to_eat: []
        }
        return cityDetails;
    } else {
        return response.data.message;
    }
}

export const getBucketListItems = async (data) => {
    data = data || '';
    const response = await axios.get(`${BUCKET_LIST_API}/getBucketListForUser/${data}`);
    const trip = response;
    return trip;
}


export const getPhotos = async (place_id) => {
    const response = await axios
        .get(`${TUITS_API}/getPhotos/${place_id}`);
    console.log(response);
    return response.data;
}

export const getExperiences = async () => {
    const response = await axios
        .get(`${TUITS_API}/getUserExperience`);
    console.log(response);
    return response.data;
}

export const getExperiencesByUserId = async (userId) => {
    const data =  { userId: userId};
    const response = await axios
        .post(`${TUITS_API}/getUserExperiencebyUserId`, data);
    console.log(response);
    return response.data;
}
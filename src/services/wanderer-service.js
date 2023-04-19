import axios from 'axios';

const API_BASE = "http://localhost:4000";
const TUITS_API = `${API_BASE}/api/user`;
const TRIPS_API = `${API_BASE}/api/trip`;


export const loginUser = async (data) => {
    data = data || '';
    return await axios.post(`${TUITS_API}/checkLoginCredentials`, data);
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

export const getPhotos = async (place_id) => {
    const response = await axios
        .get(`${TUITS_API}/getPhotos/${place_id}`);
    console.log(response);
    return response.data;
}
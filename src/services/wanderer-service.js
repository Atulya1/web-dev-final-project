import axios from 'axios';
const API_BASE = "http://localhost:4000";
const TUITS_API = `${API_BASE}/api/user`;


export const loginUser = async (data) => {
    data = data || '';
    return await axios.post(`${TUITS_API}/checkLoginCredentials`, data);
}

export const registerUser = async (data) => {
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


export const getPhotos = async (place_id) => {
    const response = await axios
        .get(`${TUITS_API}/getPhotos/${place_id}`);
    console.log(response);
    return response.data;
}
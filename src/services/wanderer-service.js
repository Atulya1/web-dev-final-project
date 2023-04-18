import axios from 'axios';
const API_BASE = "http://localhost:4000";
const TUITS_API = `${API_BASE}/api/user`;


export const loginUser = async (data) => {
    data = data || '';
    return await axios.post(`${TUITS_API}/checkLoginCredentials`, data);
}


export const getPhotos = async (place_id) => {
    const response = await axios
        .get(`${TUITS_API}/getPhotos/${place_id}`);
    console.log(response);
    return response.data;
}
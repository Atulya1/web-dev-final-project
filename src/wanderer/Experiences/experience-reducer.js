import { createSlice } from "@reduxjs/toolkit";
import experiences from "../Experiences/experience.json"


const experienceSlice = createSlice({
    name: "experience",
    initialState: experiences
});

export default experienceSlice.reducer;

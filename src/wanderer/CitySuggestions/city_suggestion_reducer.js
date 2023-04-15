import { createSlice } from "@reduxjs/toolkit";
import cities from "./cities.json"


const citiesSlices = createSlice({
                                         name: "citiessuggestions",
                                         initialState: cities
                                     });

export default citiesSlices.reducer;

import { createSlice } from "@reduxjs/toolkit";
import HomeImages from "./HomeProject.json"


const HomeProjectSlices = createSlice({
                                         name: "Homeimage",
                                         initialState: HomeImages
                                     });

export default HomeProjectSlices.reducer;
import { createSlice } from "@reduxjs/toolkit";
import experiencedetails from "./experiencedetail.json"


const experienceSlices = createSlice({
                                        name: "experiencedetail",
                                        initialState: experiencedetails
                                    });

export default experienceSlices.reducer;

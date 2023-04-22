import { createSlice } from "@reduxjs/toolkit";
import experiencedetails from "./experiencedetail.json"


const experienceSlices = createSlice({
                                        name: "experiencedetail",
                                        initialState: [],
                                        reducers: {
                                            fetchExperiences(state, action) {
                                                return action.payload;
                                            }
                                        }
                                    });

export const { fetchExperiences } = experienceSlices.actions;

export default experienceSlices.reducer;

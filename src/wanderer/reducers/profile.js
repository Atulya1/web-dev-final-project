import { createSlice } from "@reduxjs/toolkit";
import profileJSON from "../Profile/profile.json";

const profile = createSlice({
                                 name: "profile",
                                 initialState: profileJSON,
                                    reducers: {
                                        updateProfile(state, action) {
                                            return {
                                                ...state,
                                                firstName: action.payload.firstName,
                                                lastName: action.payload.lastName,
                                                bio: action.payload.bio,
                                                location: action.payload.location,
                                                website: action.payload.website,
                                                dateOfBirth: action.payload.dateOfBirth
                                            }
                                        }
                                    }
                             });

export const {updateProfile} = profile.actions;
export default profile.reducer;
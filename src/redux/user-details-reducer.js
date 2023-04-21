import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
    // logoutThunk,
    // // registerThunk,
    // // profileThunk,
    // updateUserThunk,
} from "../services/wanderer-thunk";

const initialState = {
    currentUser: null,
};
const userSlice = createSlice({
                                  name: "user",
                                  initialState,
                                  // reducers: {
                                  //     updateCurrentUser: (state, { payload }) => {
                                  //         state.currentUser = payload;
                                  //     },
                                  // },
                                  extraReducers: {
                                      [loginThunk.fulfilled]: (state, { payload }) => {
                                          state.currentUser = payload;
                                      },
                                      [loginThunk.rejected]: (state, { payload }) => {
                                          // state.currentUser = payload;
                                          // console.log(state.currentUser);
                                          console.log("Failed");
                                      },
                                      [loginThunk.pending]: (state, { payload }) => {
                                          // state.currentUser = payload;
                                          // console.log(state.currentUser);
                                          console.log("Pending");
                                      },
                                      [logoutThunk.fulfilled]: (state) => {
                                          state.currentUser = null;
                                      },
                                      // // [profileThunk.fulfilled]: (state, { payload }) => {
                                      // //     state.currentUser = payload;
                                      // // },
                                      // // [registerThunk.fulfilled]: (state, { payload }) => {
                                      // //     state.currentUser = payload;
                                      // // },
                                      // [updateUserThunk.fulfilled]: (state, { payload }) => {
                                      //     state.currentUser = payload;
                                      // },
                                  },
                              });

export default userSlice.reducer;
export const { updateCurrentUser } = userSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, updateUserThunk
    // logoutThunk,
    // // registerThunk,
    // // profileThunk,
} from "../services/wanderer-thunk";

const initialState = {
    currentUser: null,
};
const userSlice = createSlice({
                                  name: "user",
                                  initialState: localStorage.getItem('user') ?
                                      { currentUser: JSON.parse(localStorage.getItem('user')) } : initialState,
                                  // reducers: {
                                  //     updateCurrentUser: (state, { payload }) => {
                                  //         state.currentUser = payload;
                                  //     },
                                  // },
                                  extraReducers: {
                                      [loginThunk.fulfilled]: (state, { payload }) => {
                                          localStorage.setItem('user', JSON.stringify(payload.message))
                                          state.currentUser = payload.message;
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
                                          localStorage.removeItem('user');
                                          state.currentUser = null;
                                      },
                                      // // [profileThunk.fulfilled]: (state, { payload }) => {
                                      // //     state.currentUser = payload;
                                      // // },
                                      // // [registerThunk.fulfilled]: (state, { payload }) => {
                                      // //     state.currentUser = payload;
                                      // // },
                                      [updateUserThunk.fulfilled]: (state, { payload }) => {
                                          console.log("hello", payload);
                                          localStorage.setItem('user', JSON.stringify(payload))
                                          state.currentUser = payload;
                                          console.log("updated");
                                      },
                                      [updateUserThunk.rejected]: (state, { payload }) => {
                                          console.log("Failed");
                                      },
                                  },
                              });

export default userSlice.reducer;
export const { updateCurrentUser } = userSlice.actions;
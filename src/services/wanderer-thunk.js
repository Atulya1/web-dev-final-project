import { createAsyncThunk } from "@reduxjs/toolkit";
import * as wandererService from "./wanderer-service";

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        const user = await wandererService.loginUser(credentials);
        console.log("jdfhdfjh", user);
        if(user.status == 404) {
            throw new Error("Incorrect Password")
        } else {
            return user;
        }

    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async ( {userId,data} ) => {
        const status = await wandererService.updateProfile(userId,data);
        return status;
    }
);

export const logoutThunk = createAsyncThunk("user/logout", async () => {
    const status = await wandererService.logout();
    return status;
});

// export const profileThunk = createAsyncThunk("user/profile", async () => {
//     const user = await userService.profile();
//     return user;
// });

// export const registerThunk = createAsyncThunk(
//     "user/register",
//     async (credentials) => {
//         const user = await userService.register(credentials);
//         return user;
//     }
// );
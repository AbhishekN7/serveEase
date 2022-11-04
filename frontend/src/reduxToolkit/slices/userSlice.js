import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (arg, { rejectWithValue }) => {
    try {
        console.log(arg);
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/user/register`, arg);
        return data.result;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})

export const getAllUsers = createAsyncThunk("user/fetchAll", async (arg, { rejectWithValue }) => {
    try {
        console.log(arg);
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/user/`);
        return data.result;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})

export const getSingleUser = createAsyncThunk("user/fetchSingle", async (id, { rejectWithValue }) => {
    try {
        // console.log(arg);
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/user/${id}`);
        return data.result;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})

export const updateUser = createAsyncThunk("user/update", async (arg, { rejectWithValue }) => {
    try {
        console.log(arg);
        const { data } = await axios.put(`${process.env.REACT_APP_URL}/api/user/${arg._id}`, arg);
        return data.result;
    } catch (error) {
        return rejectWithValue("Error" + error)
    }
})



const userSlice = createSlice({
    name: "user",
    initialState: { user: [], singleUser: [], updatedUser: [] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(userRegister.pending, (state, { payload }) => {
            state.userRegisterLoading = true
        }).addCase(userRegister.fulfilled, (state, { payload }) => {
            state.userRegisterLoading = false
            state.user = payload
        }).addCase(userRegister.rejected, (state, { payload }) => {
            state.userRegisterLoading = false
            state.user = payload
        }).addCase(getSingleUser.pending, (state, { payload }) => {
            state.getSingleUserLoading = true
        }).addCase(getSingleUser.fulfilled, (state, { payload }) => {
            state.getSingleUserLoading = false
            state.singleUser = payload
        }).addCase(getSingleUser.rejected, (state, { payload }) => {
            state.getSingleUserLoading = false
            state.error = payload
        }).addCase(updateUser.pending, (state, { payload }) => {
            state.updateUserLoading = false
            state.updatedUser = false
        }).addCase(updateUser.fulfilled, (state, { payload }) => {
            state.updateUserLoading = false
            state.updatedUser = true
        }).addCase(updateUser.rejected, (state, { payload }) => {
            state.updateUserLoading = false
            state.error = payload
        })
    }


})

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const proRegister = createAsyncThunk("professional/register", async (arg, { rejectWithValue }) => {
    try {
        console.log(arg);
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/professional/register`, arg);
        console.log(data);
        return data.result;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})
export const updateProAd = createAsyncThunk("professional/update", async (arg, { rejectWithValue }) => {
    try {
        console.log(arg);
        const { data } = await axios.put(`${process.env.REACT_APP_URL}/api/professional/service/${arg._id}`, arg);
        console.log(data);
        return data.result;
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})


const proSlice = createSlice({
    name: "professional",
    initialState: { professional: [] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(proRegister.pending, (state, { payload }) => {
            state.proRegisterLoading = true
        }).addCase(proRegister.fulfilled, (state, { payload }) => {
            state.proRegisterLoading = false
            state.professional = payload
        }).addCase(proRegister.rejected, (state, { payload }) => {
            state.proRegisterLoading = false
            state.error = payload
        }).addCase(updateProAd.pending, (state, { payload }) => {
            state.updateProAdLoading = true

        }).addCase(updateProAd.fulfilled, (state, { payload }) => {
            state.updateProAdLoading = false
            state.updateProAd = true
        }).addCase(updateProAd.rejected, (state, { payload }) => {
            state.updateProAdLoading = false
            state.updateProAd = false
            state.error = payload
        })
    }
})

export default proSlice.reducer;

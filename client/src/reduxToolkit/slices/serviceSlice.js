import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addService = createAsyncThunk("add-service", async (serviceData, { getState, rejectWithValue }) => {
    try {
        const token = getState().login.login.token
        console.log(serviceData);
        const config = {
            headers: {
                authorization: token
            }
        }
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/services/`, serviceData, config)
        return data.result
    } catch (error) {
        return rejectWithValue("error" + error)
    }
})

export const getAllServices = createAsyncThunk("getall-services", async (arg, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/services/`)
        return data.result
    } catch (error) {
        return rejectWithValue("Error" + error)
    }
})


export const checkoutService = createAsyncThunk("checkout-service", async (id, { rejectWithValue }) => {
    try {
        console.log(id);
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/services/${id}`);
        return data.result
    } catch (error) {
        return rejectWithValue("Error" + error)
    }
})

//constinue
export const updateUserService = createAsyncThunk("service/update/service", async (arg, { getState, rejectWithValue }) => {
    try {
        console.log(arg);
        const config = {
            headers: {
                authorization: getState().login.login.token
            }
        }
        const { data } = await axios.put(`${process.env.REACT_APP_URL}/api/services/user/${arg.id}`, { booked: arg.booked }, config);
        return data.result;
    } catch (error) {
        return rejectWithValue("Error" + error);
    }
})

export const userBookedService = createAsyncThunk("user-booked-services", async (e, { getState, rejectWithValue }) => {
    try {
        const id = getState().login.login.id;
        console.log(id);
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/services/user/booked/${id}`);
        return data.result
    } catch (error) {
        return rejectWithValue("Error" + error)
    }
})


const serviceSlice = createSlice({
    name: "serviceSLice",
    reducers: {},
    initialState: { service: {}, allServices: {}, checkout: [], userServices: [] },
    extraReducers(builder) {
        builder.addCase(addService.pending, (state, { payload }) => {
            state.addServiceLoading = true
        }).addCase(addService.fulfilled, (state, { payload }) => {
            state.addServiceLoading = false
            state.service = payload
        }).addCase(addService.rejected, (state, { payload }) => {
            state.addServiceLoading = false
            state.error = payload

        }).addCase(getAllServices.pending, (state, { payload }) => {
            state.getAllServicesLoading = true
        }).addCase(getAllServices.fulfilled, (state, { payload }) => {
            state.getAllServicesLoading = false
            state.allServices = payload
        }).addCase(getAllServices.rejected, (state, { payload }) => {
            state.getAllServicesLoading = false
            state.error = payload

        }).addCase(checkoutService.pending, (state, { payload }) => {
            state.checkoutServiceLoading = true
        }).addCase(checkoutService.fulfilled, (state, { payload }) => {
            state.getAllServicesLoading = false
            state.checkout = payload
        }).addCase(checkoutService.rejected, (state, { payload }) => {
            state.getAllServicesLoading = false
            state.error = payload

        }).addCase(updateUserService.pending, (state, { payload }) => {
            state.updateUserServiceLoading = true
        }).addCase(updateUserService.fulfilled, (state, { payload }) => {
            state.updateUserServiceLoading = false
            state.updateUserService = true
        }).addCase(updateUserService.rejected, (state, { payload }) => {
            state.updateUserServiceLoading = false
            state.error = payload

        }).addCase(userBookedService.pending, (state, { payload }) => {
            state.userBookedService = true
        }).addCase(userBookedService.fulfilled, (state, { payload }) => {
            state.userBookedService = false
            state.userServices = payload
        }).addCase(userBookedService.rejected, (state, { payload }) => {
            state.userBookedService = false
            state.error = payload
        })
    }
})

export default serviceSlice.reducer;
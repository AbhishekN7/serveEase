import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loginUser = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
    try {
        console.log(credentials);
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/auth/user-login`, credentials)
        return data.result
    } catch (error) {
        return rejectWithValue("Error" + error)
    }
})

export const loginPro = createAsyncThunk("pro/login", async (credentials, { rejectWithValue }) => {
    try {
        console.log(credentials);
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/auth/professional-login`, credentials);
        return data.result;
    } catch (error) {
        return rejectWithValue("Error" + error);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: { login: {} },
    reducers: {
        logoutAction(state) {
            state.login = null
        }
    },
    extraReducers(builder) {
        builder.addCase(loginUser.pending, (state, { payload }) => {
            state.loginUserloading = true
        }).addCase(loginUser.fulfilled, (state, { payload }) => {
            state.login = payload
            state.loginUserloading = false
            state.userLogin = true
            state.proLogin = false
        }).addCase(loginUser.rejected, (state, { payload }) => {
            state.error = payload
            state.loginUserloading = false
        }).addCase(loginPro.pending, (state, { payload }) => {
            state.loginProloading = true
        }).addCase(loginPro.fulfilled, (state, { payload }) => {
            state.login = payload
            state.loginProloading = false
            state.proLogin = true
            state.userLogin = false
        }).addCase(loginPro.rejected, (state, { payload }) => {
            state.loginProloading = false
            state.error = payload
        })
    }
})

export default authSlice.reducer
export const { logoutAction } = authSlice.actions;
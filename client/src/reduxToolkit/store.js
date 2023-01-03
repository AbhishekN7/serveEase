import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice";
import proSlice from "./slices/proSlice";
import serviceSlice from "./slices/serviceSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        login: authSlice,
        user: userSlice,
        professional: proSlice,
        service: serviceSlice
    }
})

export default store;
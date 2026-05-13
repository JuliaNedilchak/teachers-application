import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from './features/teachers/teachersSlice.js'
import filtersReducer from './features/filters/filtersSlice.js'
import authReducer from './features/auth/authSlice.js'

export const store = configureStore({
    reducer:{
        teachers: teachersReducer,
        filters: filtersReducer,
        auth: authReducer,
    }
})
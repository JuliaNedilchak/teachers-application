import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from './features/teachers/teachersSlice.js'

export const store = configureStore({
    reducer:{
        teachers: teachersReducer
    }
})
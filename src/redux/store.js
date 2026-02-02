import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from './features/teachers/teachersSlice.js'
import filtersReducer from './features/filters/filtersSlice.js'

export const store = configureStore({
    reducer:{
        teachers: teachersReducer,
        filters: filtersReducer,
    }
})
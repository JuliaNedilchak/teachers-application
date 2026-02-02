import { createSlice } from "@reduxjs/toolkit"

const initialState={
    languages:'all',
    levels:'all',
    price:'all',
}


const filtersSlice=createSlice({
    name:'filters',
    initialState,
    reducers:{
        setFilter(state,action){
            const{name,value}=action.payload;
            state[name]=value;
        },
        resetFilters(){
            return initialState;
        }
    }

});
export const{setFilter,resetFilters}=filtersSlice.actions;
export default filtersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"



const initialState={
    favorites:[],
}

const favoriteSlice=createSlice({
    name:'favorites',
    initialState,
    reducers:{
        toggleFavorite(state,action){
            const teacher=action.payload;
            const exists=state.favorites.find((item)=> item.id=== teacher.id);
            if(exists) {
              state.favorites=state.favorites.filter((item)=>item.id !== teacher.id);
            }
            else{state.favorites.push(teacher);}
        },
    },
});

export const {toggleFavorite}=favoriteSlice.actions;
export default favoriteSlice.reducer;
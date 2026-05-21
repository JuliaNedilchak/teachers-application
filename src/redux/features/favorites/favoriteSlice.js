import { createSlice } from "@reduxjs/toolkit"


const savedFavorites=JSON.parse(localStorage.getItem('favorites')) || [];

const initialState={
    favorites:savedFavorites,
}

const favoriteSlice=createSlice({
    name:'favorites',
    initialState,
    reducers:{
        toggleFavorite(state,action){
            const {teacher, uid}=action.payload;
            const exists=state.favorites.find((item)=> item.id=== teacher.id);
            if(exists) {
              state.favorites=state.favorites.filter((item)=>item.id !== teacher.id);
            }
            else{state.favorites.push(teacher);

            }
            localStorage.setItem(
                `favorites_${uid}`,
                JSON.stringify(state.favorites)
            );
        },
        clearFavorites(state) {
            state.favorites=[];
           
        },
        setFavorites(state,action){
            state.favorites=action.payload;
        }
    },

});

export const {toggleFavorite, clearFavorites, setFavorites}=favoriteSlice.actions;
export default favoriteSlice.reducer;
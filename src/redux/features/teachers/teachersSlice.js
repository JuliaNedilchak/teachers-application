import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import { ref, get } from 'firebase/database';

const initialState={
    items: [],
        status: 'idle',
        error: null,
}

export const fetchTeachers= createAsyncThunk( 'teachers/fetchAll',
    async(__, thunkAPI)=> {
        try{
            const teachersRef = ref(db,'/');
            const snapshot =  await get(teachersRef);
            const data = snapshot.val();

            if (!data) return [];
           

            return  Object.entries(data).map(([id,teacher])=>
            ({id, 
                ...teacher}));
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const teachersSlice=  createSlice({
    name:'teachers',
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder
        .addCase(fetchTeachers.pending,
            (state)=>{
        state.status='loading';
    state.error=null;} )
    .addCase(fetchTeachers.fulfilled,(state,action)=>{
        state.status='succeeded';
       state.items=action.payload;
    })
    .addCase(fetchTeachers.rejected,(state,action)=>{
        state.status='failed';
        state.error=action.payload || 'failed to load teachers'
    })
    }
})

export default teachersSlice.reducer;
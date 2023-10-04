import { createSlice } from "@reduxjs/toolkit";
const initialState={
    // value:[],
    filteredMovies:[ ],
    dataEmptyError:"",
}
 
 const MoviesFilterSlice=createSlice({
   
    name:"filter",
    initialState,
    reducers:{
        setFilter(state, value) {
            state.filteredMovies = value.payload;
          },
          setDataEmptyError(state, value) {
            state.dataEmptyError = value.payload;
          },

    }


})

export const {setFilter,setDataEmptyError}=MoviesFilterSlice.actions;
export default MoviesFilterSlice.reducer;

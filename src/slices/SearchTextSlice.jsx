import { createSlice } from "@reduxjs/toolkit";
const initialState={
    searchText:""
}
 
const SearchTextSlice=createSlice({
   
    name:"searchText",
    initialState,
    reducers:{
        setSearchText(state, value) {
            state.searchText = value.payload;
          },

    }


})

export const {setSearchText}=SearchTextSlice.actions;
export default SearchTextSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    page:1,
}
 
const PaginationSlice=createSlice({
   
    name:"pagination",
    initialState,
    reducers:{
        increment:(state)=>{
            state.page+=1;
        },
        decrement:(state)=>{
            state.page-=1;
        },
        setPage(state, value) {
            state.page = value.payload;
        },
    }


})

export const {increment,decrement,setPage}=PaginationSlice.actions;
export default PaginationSlice.reducer;

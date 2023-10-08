import { createSlice } from "@reduxjs/toolkit";
const initialState={
    urlData:null,
}
 
const urlDataSlice=createSlice({
   
    name:"urlData",
    initialState,
    reducers:{
        setUrlData(state, value) {
            state.urlData = value.payload;
          },
    }

})

export const {setUrlData}=urlDataSlice.actions;
export default urlDataSlice.reducer;
import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice"
import PaginationSlice from "../slices/PaginationSlice";
import MoviesFilterSlice from "../slices/MoviesFilterSlice";
import SearchTextSlice from "../slices/SearchTextSlice";
import urlData from "../slices/urlData";


const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    cart:cartReducer,
    pagination:PaginationSlice,
    filter:MoviesFilterSlice,
    searchText:SearchTextSlice,
    urlData:urlData,
})


export default rootReducer;
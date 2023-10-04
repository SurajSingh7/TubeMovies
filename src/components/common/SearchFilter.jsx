import React from 'react'
import { moviesList} from "../../utils/constant";
import { useState, useEffect} from "react";
import { filterData } from "../../utils/helper";

import { useDispatch, useSelector } from "react-redux";
import { setDataEmptyError, setFilter } from "../../slices/MoviesFilterSlice";
import { setPage } from '../../slices/PaginationSlice';
import { setSearchText } from '../../slices/SearchTextSlice';

export const SearchFilter = ({flag}) => {

    
    const {searchText} =useSelector((state)=>state.searchText);
    const [allMovies, setAllMovies] = useState([]);
    const {filteredMovies,dataEmptyError} =useSelector((state)=>state.filter);
    const dispatch=useDispatch();


    useEffect(()=>{

        (async function getMovies() {
         try {
           
           setAllMovies(moviesList);
           dispatch(setFilter(moviesList));
           
         } catch (error) {
           console.log(error);
         }
       })();

     },[]);


               // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, movies) => {
            if (searchText !== "" && searchText!=null) {
            const data = filterData(searchText, movies);
            // setFilteredMovies(data)
            dispatch(setFilter(data));
            

                console.log("suraj singh issue.............",filteredMovies)

            //  setErrorMessage("");
                dispatch(setDataEmptyError(""));
                if (data.length === 0) {
            //  setErrorMessage(
            // `Sorry, we couldn't find any results for "${searchText}"`
            //    );

                dispatch(setDataEmptyError(`Sorry, we couldn't find any results for "${searchText}"`));
                } 
            }
                else {
            // setErrorMessage("");
            dispatch(setDataEmptyError(""));
            // setFilteredMovies(movies);
            dispatch(setFilter(movies));
            

            }
            }; 


  return (

    <>
    
    {(flag =="2")?

    <div className=" p-6 h-8  items-center flex justify-center ">

        <input type="text" className="search-input     w-[75%]  sm:w-[65%]   md:w-[50%]   lg:w-[36%]  rounded-none h-8 flex  outline-none" placeholder="  Search movies here..."
         value={searchText}   onChange={(e)=>{ 
          dispatch(setSearchText(e.target.value)); 
          searchData(e.target.value, allMovies);
          dispatch(setPage(1));

          }} />

        <button className="p-1  bg-gray-500   font-extrabold rounded-none   bg-caribbeangreen-200 text-black  " onClick={()=>{  
        searchData(searchText, allMovies);

        }}>  Search</button>

    </div>

    : 

    <div className=" p-6 h-2=8  items-center flex justify-center ">

        <input type="text" className="bg-richblack-25 border-none rounded-lg outline-2 h-7 hidden lg:flex lg:w-44 xl:w-48 " placeholder="  Search movies here..."
         value={searchText}  onChange={(e)=>{ 
          dispatch(setSearchText(e.target.value)); 
          searchData(e.target.value, allMovies);
          dispatch(setPage(1));

          }} />
    </div>

    }


    </>



  )
}

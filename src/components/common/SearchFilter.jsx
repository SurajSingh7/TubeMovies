import React from 'react'
import { moviesList} from "../../utils/constant";
import { useState, useEffect} from "react";
import { filterData } from "../../utils/helper";

import { useDispatch, useSelector } from "react-redux";
import { setDataEmptyError, setFilter } from "../../slices/MoviesFilterSlice";
import { setPage } from '../../slices/PaginationSlice';
import { setSearchText } from '../../slices/SearchTextSlice';
import { apiConnector } from '../../services/apiconnector';
import { createMovieEndpoint } from '../../services/apis';

export const SearchFilter = ({flag}) => {

    
    const {searchText} =useSelector((state)=>state.searchText);
    const [allMovies, setAllMovies] = useState([]);
    const {filteredMovies,dataEmptyError} =useSelector((state)=>state.filter);
    const dispatch=useDispatch();


    useEffect(()=>{

        (async function getMovies() {
         try {


          const res = await apiConnector("GET", createMovieEndpoint.GETMOVIES_API);
          const Allmovies=res?.data?.data;

          setAllMovies(Allmovies);
          dispatch(setFilter(Allmovies));
           
          //  setAllMovies(moviesList);
          //  dispatch(setFilter(moviesList));
           
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
            

                dispatch(setDataEmptyError(""));
                if (data.length === 0) {
         

                dispatch(setDataEmptyError(`Sorry, we couldn't find any results for "${searchText}"`));
                } 
            }
                else {
     
            dispatch(setDataEmptyError(""));
            dispatch(setFilter(movies));
            

            }
            }; 


  return (

    <div className='-mt-1'>
    
    {(flag =="2")?

    <div className=" p-6 h-8  items-center flex justify-center ">

        <input type="text" className="  w-[75%]  sm:w-[65%]   md:w-[50%] outline-none  lg:w-[36%]  rounded-none h-8 flex " placeholder="  Search movies here..."
         value={searchText}   onChange={(e)=>{ 
          dispatch(setSearchText(e.target.value)); 
          searchData(e.target.value, allMovies);
          dispatch(setPage(1));

          }} />

        <button className="p-[4.4px]  bg-gray-500    font-bold rounded-none   bg-[#0f9d58] hover:bg-caribbeangreen-500 text-[#fff]  " onClick={()=>{  
        searchData(searchText, allMovies);

        }}>  Search</button>

    </div>

    : 

    <div className=" p-6 mt-2 h-2 items-center flex justify-center ">

        <input type="text" className="bg-richblack-25 border-none rounded-lg outline-1 h-7 hidden lg:flex lg:w-44 xl:w-48 " placeholder="  Search movies here..."
         value={searchText}  onChange={(e)=>{ 
          dispatch(setSearchText(e.target.value)); 
          searchData(e.target.value, allMovies);
          dispatch(setPage(1));

          }} />
    </div>

    }


    </div>
   



  )
}

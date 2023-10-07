import React, { useEffect, useState } from 'react'
import { createMovieEndpoint } from '../../../services/apis';
import { apiConnector } from '../../../services/apiconnector';
import { filterDataType } from '../../../utils/helper';
import MovieCard from '../../common/MovieCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../slices/PaginationSlice';
import { movieCategoryName, moviesList } from '../../../utils/constant';

export const CategoryMovies = ({movieText}) => {


     const searchText=movieText;
     const categoryName=movieCategoryName[searchText];

    //  const[page,setPage]=useState(1);
    //  const ItemInOnePage=5;

     const {page} = useSelector((state)=>state.pagination);
     const dispatch=useDispatch();
     const ItemInOnePage=20;



     const [allMovies, setAllMovies] = useState([]);

    
    useEffect(()=>{

        (async function getMovies() {
         try {
         
            
           const res = await apiConnector("GET", createMovieEndpoint.GETMOVIES_API);
           const Allmovies=res?.data?.data;
        
            setAllMovies(Allmovies);
            //   setAllMovies(moviesList);
           
         } catch (error) {
           console.log(error);
         }
       })();

     },[]);


     const filteredMovies =filterDataType(searchText,allMovies);
     const NumOfPage=(Math.ceil(filteredMovies?.length/ItemInOnePage));

    




  return (
    <div>



          <div className="h-8 -mb-2 mx-12  text-richblack-100  text-sm font-semibold flex gap-3"> Archive By Category "{categoryName}"  </div>
          <div className="bg-richblack-600 w-[93%] m-1 mx-12 flex justify-center items-center h-[0.1px]"></div>



            <div className="flex flex-wrap  justify-center   sm:justify-center  xl:justify-evenly items-center text-center ">

                    {
                    filteredMovies.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((movie) =>{
                        return(
                            <Link to={"/movie/"+movie._id} key={movie._id} >
                            <MovieCard {...movie} />
                            </Link>  
                        );
                    })
                    }
            </div>

            {/* pagegination */}
            {
            <div className=" p-6 w-[1280] h-8 my-5 items-center flex justify-center font-semibold ">


            <div className=" bg-white flex border-2 rounded-md border-white ">

                <button className=" p-1  bg-gray-500  hover:bg-caribbeangreen-400   bg-caribbeangreen-200  text-black rounded-md " onClick={()=>{  
                {(page<=1)?  dispatch(setPage(NumOfPage))  : dispatch(setPage(page-1))}
            }}>
            Prev</button>

            <div className="bg-white p-1 pl-3 pr-4 font-bold ">
                <h1> {page==0?1:page} of {NumOfPage==0?1:NumOfPage} </h1>
            </div>

            <button className=" p-1  bg-gray-500 hover:bg-caribbeangreen-400    bg-caribbeangreen-200 text-black rounded-md" onClick={()=>{  
                {(page>=NumOfPage)? dispatch(setPage(1)): dispatch(setPage(page+1))}
            }}>
            Next</button>

            </div>


            </div>
            }
      

    </div>
  )
}







// // Body part- 2
// import { TypeMovieObj, moviesList } from "../utils/constants";
// import MovieCard from "./MovieCard";
// import { useState, useEffect} from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import {  filterDataType } from "../utils/helper";


// const MoviesFilter=({moviestext})=>{
         
//         const searchText=moviestext;
//         const [allMovies, setAllMovies] = useState([]);

//         const[page,setPage]=useState(1);
//         const ItemInOnePage=5;


//         useEffect(()=>{
//            getMovies();
//         },[]);

        
//         async function getMovies() {
//           try {
//             setAllMovies(moviesList);
        
//           } catch (error) {
//             console.log(error);
//           }
//         }

      
//     // if(allRestaurants.length==0) return (<Shimmer/>);

//     const movieTypefilter =filterDataType(searchText,allMovies);

//     return (allMovies.length==0)?<Shimmer/>: (
       
//        <>
//        <div className="search-container p-6 h-8 bg-pink-50 my- items-center flex justify-center font-extrabold ">
//              <h1> LIST OF {TypeMovieObj[searchText]}</h1>
//        </div>

//         <div className="flex flex-wrap justify-center">
//             {   
                
//                 movieTypefilter.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((movie) =>{
//                     return(
//                        <Link to={"/movie/"+movie.id} key={movie.id} >
//                           <MovieCard {...movie} />
//                         </Link>  
//                     );
//                 })
//             }


//                {
//                  <div className="search-container p-6 w-[1280] h-8 bg-pink-50  items-center flex justify-center ">

//                    <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm  " onClick={()=>{  
//                       {(page<=1)?setPage(Math.ceil(movieTypefilter.length/ItemInOnePage)):setPage(page-1)}
//                  }}>
//                  Prev</button>

//                 <div className="bg-white p-1 pl-3 pr-4"> 
//                   {/* <h1>  {page} of {Math.ceil(data.length/ItemInOnePage)}  </h1>  */}
//                   <h1> {page==0?1:page} of {Math.ceil(movieTypefilter.length/ItemInOnePage)==0?1:Math.ceil(movieTypefilter.length/ItemInOnePage)} </h1>
//                 </div>

//                  <button className="search-btn p-1  bg-gray-500 hover:bg-pink-400 text-black rounded-sm " onClick={()=>{  
//                    {(page>=Math.ceil(movieTypefilter.length/ItemInOnePage))?setPage(1):setPage(page+1)}
//                  }}>
//                  Next</button>
     
//                  </div>

//               }

        
//         </div>

//         </>
//     );
// };

// export default MoviesFilter;
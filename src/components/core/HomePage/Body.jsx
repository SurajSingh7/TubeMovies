import MovieCard from "../../common/MovieCard";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Shimmer from "../../common/Shimmer";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../../slices/MoviesFilterSlice";
import { SearchFilter } from "../../common/SearchFilter";
import { setPage } from "../../../slices/PaginationSlice";
import { apiConnector } from "../../../services/apiconnector";
import { createMovieEndpoint } from "../../../services/apis";




const Body=()=>{


        const {page} = useSelector((state)=>state.pagination);
        const dispatch=useDispatch();
        const ItemInOnePage=20;
      

      
        const [allMovies, setAllMovies] = useState([]);
        const {filteredMovies,dataEmptyError} =useSelector((state)=>state.filter);
        const NumOfPage=(Math.ceil(filteredMovies.length/ItemInOnePage));

        useEffect(()=>{

           (async function getMovies() {
            try {
            
               
              const res = await apiConnector("GET", createMovieEndpoint.GETMOVIES_API);
              const Allmovies=res?.data?.data;

              setAllMovies(Allmovies);
              dispatch(setFilter(Allmovies));
              
            } catch (error) {
              console.log(error);
            }
          })();

        },[]);

        
    return (allMovies.length==0)?<Shimmer/>: (
       
       <>
       <div className="mt-5">
     

      {/* <div className="search-container p-6 h-8 bg-pink-50  items-center flex justify-center "> */}
           
      {/* </div> */}

      {/* <div className="h-8 -mb-2 mx-12  text-richblack-100  text-sm font-semibold flex gap-3"> Home  <div>{">"} </div>  Archive By Category "English"</div>
      <div className="bg-richblack-600 w-[93%] m-1 mx-12 flex justify-center items-center h-[0.1px]"></div> */}

  
      {(dataEmptyError!="")&&

       
       <div className=" h-52 text-richblack-50  mx-10 items-center flex justify-center text-center  shadow-[2px_-1px_10px_-2px] shadow-blue-200 error-container">
        {dataEmptyError}🤔</div> 

       }
       

       {(dataEmptyError=="") &&
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

       }

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
        </>
    );
};

export default Body;



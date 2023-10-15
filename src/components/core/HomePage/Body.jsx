import MovieCard from "../../common/MovieCard";
import { useState, useEffect} from "react";
import Shimmer from "../../common/Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { setDataEmptyError, setFilter } from "../../../slices/MoviesFilterSlice";
import { setPage } from "../../../slices/PaginationSlice";
import { apiConnector } from "../../../services/apiconnector";
import { createMovieEndpoint } from "../../../services/apis";
import { setSearchText } from "../../../slices/SearchTextSlice";


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
              dispatch(setPage(1));
              dispatch(setSearchText(""));
              dispatch(setDataEmptyError(""));
              
            } catch (error) {
              console.log(error);
            }
          })();

        },[]);

        
    return (allMovies.length==0)?<Shimmer/>: (
       
       <>
       <div className="mt-5">
     
           {(dataEmptyError!="")&&
            <div className=" h-52 text-richblack-50  mx-10 items-center flex justify-center text-center  shadow-[2px_-1px_10px_-2px] shadow-blue-200 error-container">
            {dataEmptyError}🤔</div> 

            }
       

            {(dataEmptyError=="") &&
                  <div className="flex flex-wrap gap-5 lg:gap-7 m-4" >

                                {
                                filteredMovies.slice(ItemInOnePage*(page-1),page*ItemInOnePage).map((movie) =>{
                                    return(
                                        <MovieCard  movie={movie}  key={movie?._id}/>
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



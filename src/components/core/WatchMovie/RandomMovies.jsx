import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { apiConnector } from "../../../services/apiconnector";
import { createMovieEndpoint } from "../../../services/apis";
import Shimmer from "../../common/Shimmer";
import MovieCard from "../../common/MovieCard";
import HighlightText from "./HighLightText";





const RandomMovies=()=>{


        const {movieId}=useParams();
        const [allMovies, setAllMovies] = useState([]);

        useEffect(()=>{

           (async function getMovies() {
            try {
            
              const res = await apiConnector("GET", createMovieEndpoint.GETMOVIES_API);

              const movieData=res?.data?.data?.filter( (movie) => movie?._id!= movieId ).slice(0,100);
              const shuffled=movieData.sort( ()=>Math.random()-Math.random() );

              setAllMovies(shuffled);
              
            } catch (error) {
              console.log(error);
            }
          })();

        },[]);


        
    return (allMovies.length==0)?<Shimmer/>: (
       
       <>
       <div className="  mb-10 mt-8">
     
           
      {/* </div> */}

      <div className=" mb-3 mx-12  text-richblack-100  text-xl sm:text-3xl md:text-4xl font-bold flex gap-4">  <HighlightText text={"You may also like"}/></div>
      <div className="bg-richblack-600 w-[93%] m-1 mx-12 flex justify-center items-center h-[0.1px]"></div>

          <div className="flex flex-wrap gap-5 lg:gap-7 m-4">

                      {
                      allMovies.slice(0,20).map((movie) =>{
                          return(
                           
                                  <MovieCard  movie={movie}  key={movie?._id} path={true}/>
                          );
                      })
                    }
           </div>

   

        </div>
        </>
    );
};

export default RandomMovies;



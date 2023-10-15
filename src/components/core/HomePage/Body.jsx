import MovieCard from "../../common/MovieCard";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Shimmer from "../../common/Shimmer";
import { useDispatch, useSelector } from "react-redux";

import { setDataEmptyError, setFilter } from "../../../slices/MoviesFilterSlice";
import { SearchFilter } from "../../common/SearchFilter";
import { setPage } from "../../../slices/PaginationSlice";
import { apiConnector } from "../../../services/apiconnector";
import { createMovieEndpoint } from "../../../services/apis";
import { setSearchText } from "../../../slices/SearchTextSlice";
import ScrollToTop from "../../../utils/scrollToTop";




const Body=()=>{


        const {page} = useSelector((state)=>state.pagination);
        const dispatch=useDispatch();
        const ItemInOnePage=20;

        const moviesList=[
          {
             
               id: "0",
               name: "Kaithi (4K)",
               image: "https://res.cloudinary.com/dxkxa0mkq/image/upload/v1695967668/samples/WhatsApp_Image_2023-09-29_at_11.33.00_AM_2_bawr4r.jpg",
               url:  "https://youtu.be/-I12_W7UHh0",
               linkType:"youtube",
               movieType:"23",
               showRating:"5"
         
              
          },
          {
           
             id: "1",
             name: "Aravind Sametha (4K) ",
             image: "https://static.moviecrow.com/gallery/20180521/139559-Aravinda%20Sametha%20Veera%20Raghava.jpg",
             url:"https://res.cloudinary.com/dxkxa0mkq/video/upload/v1695568703/Upskills/vwdsnebpaqwjvqd4eo5t.mp4",
             linkType:"other",
             movieType:"2",
             showRating:"5"
           },
          {
             id: "2",
             name: "K.G.F Full Movie",
             image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7",
             url:"https://youtu.be/ULEQb_l-N08",
             linkType:"youtube",
             movieType:"23",
             showRating:"5"
         
          },
          {
         
             id: "3",
             name: "Bermuda Tentacles",
             image: "https://flxt.tmsimg.com/assets/p10648316_p_v10_aa.jpg",
             url:"https://youtu.be/JtmCRZqWW5o",
             linkType:"youtube",
             movieType:"6",
             showRating:"5"
          },
          {
           
             id: "4",
             name: "Bhool Bhulaiyaa",
             image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhool-bhulaiyaa-et00000097-24-03-2017-16-39-50.jpg",
             url:"https://youtu.be/jzYxbnHHhY4",
             linkType:"youtube",
             movieType:"15",
             showRating:"5"
         
           
         
          },
          {
          
             id: "5",
             name: "Magadheera ",
             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniE6jjn-VfygT4MUldYmnxSOfErBq65Np9Q&usqp=CAU",
             url:"https://youtu.be/n9UxHQ1unn8",
             linkType:"youtube",
             movieType:"23",
             showRating:"5"
           
         
          },
          {
             id: "6",
             name: "Ramaiya Vastavaiya",
             image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
             url:"https://youtu.be/11OWuPcElJw",
             linkType:"youtube",
             movieType:"4",
             showRating:"5"
          },
          {
             
            id: "7",
            name: "Shawshank Redemption",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3rMf7hP-awenUzC0tTfUOL436blrYFjKCQ&usqp=CAU",
            url:  "https://youtu.be/xZ1FXdIGf9Q",
            linkType:"youtube",
            movieType:"2",
            showRating:"5"
         
           
         },
         {
         
          id: "8",
          name: "Asur ",
          image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
          url:"https://youtu.be/JXvMgM5NfXQ",
          linkType:"youtube",
          movieType:"4",
          showRating:"5"
         },
         {
          id: "9",
          name: "K.G.F: ",
          image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7",
          url:"https://youtu.be/bUR_FKt7Iso",
          linkType:"youtube",
          movieType:"2",
          showRating:"5"
         
         },
         {
         
          id: "10",
          name: "10Baahubali ",
          image: "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL75_UX190_CR0,2,190,281_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          linkType:"youtube",
          movieType:"32",
          showRating:"5"
         },
         {
         
          id: "11",
          name: "11Pushpa",
          image: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"2",
          showRating:"5"
         
         
         
         },
         {
         
          id: "12",
          name: "12Panchayat ",
          image: "https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_.jpg",
          url:"https://youtu.be/ohmp6Q5xfXg",
          movieType:"4",
          showRating:"5"
         
         
         },
         {
          id: "13",
          name: "13Asur: Welcome   ",
          image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"4",
          showRating:"5"
         },
         {
             
            id: "14",
            name: "14pnik(4K ULTRA HD)",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3rMf7hP-awenUzC0tTfUOL436blrYFjKCQ&usqp=CAU",
            url:  "https://youtu.be/xZ1FXdIGf9Q",
            movieType:"2",
            showRating:"5"
         
           
         },
         {
         
          id: "15",
          name: "15Asur: Welcome  ",
          image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
          url:"https://youtu.be/JXvMgM5NfXQ",
          movieType:"4",
          showRating:"5"
         },
         {
          id: "16",
          name: "16K.G.F: Chapter",
          image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7",
          url:"https://youtu.be/bUR_FKt7Iso",
          movieType:"32",
          showRating:"5"
         
         },
         {
         
          id: "17",
          name: "17Baahubali ",
          image: "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL75_UX190_CR0,2,190,281_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"23",
          showRating:"5"
         },
         {
         
          id: "18",
          name: "18Pushpa: ",
          image: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"23",
          showRating:"5"
         
         
         
         },
         {
         
          id: "19",
          name: "19Panchayat ",
          image: "https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_.jpg",
          url:"https://youtu.be/ohmp6Q5xfXg",
          movieType:"4",
          showRating:"5"
         
         
         },
         {
          id: "20",
          name: "20Asur: Welcome  ",
          image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"4",
          showRating:"5"
         },
         {
             
            id: "21",
            name: "21pnik(4K ULTRA HD)",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3rMf7hP-awenUzC0tTfUOL436blrYFjKCQ&usqp=CAU",
            url:  "https://youtu.be/xZ1FXdIGf9Q",
            movieType:"2",
            showRating:"5"
         
           
         },
         {
         
          id: "22",
          name: "22Asur: Welcome  ",
          image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
          url:"https://youtu.be/JXvMgM5NfXQ",
          movieType:"4",
          showRating:"5"
         },
         {
          id: "23",
          name: "23K.G.F: Chapter 2 ",
          image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7",
          url:"https://youtu.be/bUR_FKt7Iso",
          movieType:"2",
          showRating:"5"
         
         },
         {
         
          id: "24",
          name: "24Pushpa: The Rule ",
          image: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"2",
          showRating:"5"
         },
         {
         
          id: "25",
          name: "25Panchayat (TV Series 2020– )",
          image: "https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_.jpg",
          url:"https://youtu.be/ohmp6Q5xfXg",
          movieType:"",
          showRating:"5"
         
         
         },
         {
          id: "26",
          name: "26Asur: Welcome  ",
          image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
          url:"https://youtu.be/11OWuPcElJw",
          movieType:"",
          showRating:"5"
         },
         {
          
         id: "27",
         name: "27pnik(4K ULTRA HD) ",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3rMf7hP-awenUzC0tTfUOL436blrYFjKCQ&usqp=CAU",
         url:  "https://youtu.be/xZ1FXdIGf9Q",
         movieType:"",
         showRating:"5"
         
         
         },
         {
         
         id: "28",
         name: "28Asur: Welcome ",
         image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
         url:"https://youtu.be/JXvMgM5NfXQ",
         movieType:"",
         showRating:"5"
         },
         {
         id: "29",
         name: "29K.G.F: Chapter 2 ",
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7",
         url:"https://youtu.be/bUR_FKt7Iso",
         movieType:"2",
         showRating:"5"
         
         },
         {
         
         id: "30",
         name: "30Baahubali 2: The Conclusion ",
         image: "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL75_UX190_CR0,2,190,281_.jpg",
         url:"https://youtu.be/11OWuPcElJw",
         movieType:"",
         showRating:"5"
         },
         {
         
         id: "31",
         name: "31Pushpa: The Rule",
         image: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
         url:"https://youtu.be/11OWuPcElJw",
         movieType:"",
         showRating:"5"
         
         
         
         },
         {
         
         id: "32",
         name: "32Panchayat ",
         image: "https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_.jpg",
         url:"https://youtu.be/ohmp6Q5xfXg",
         movieType:"7",
         showRating:"5"
         
         
         },
         {
         id: "33",
         name: "33Asur: Welcome  ",
         image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
         url:"https://youtu.be/11OWuPcElJw",
         movieType:"7",
         showRating:"5"
         },
         {
          
         id: "34",
         name: "34pnik(4K ULTRA HD) ",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3rMf7hP-awenUzC0tTfUOL436blrYFjKCQ&usqp=CAU",
         url:  "https://youtu.be/xZ1FXdIGf9Q",
         movieType:"7",
         showRating:"5"
         
         
         },
         {
         
         id: "35",
         name: "35Asur: Welcome ",
         image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
         url:"https://youtu.be/JXvMgM5NfXQ",
         movieType:"7",
         showRating:"5"
         },
         {
         id: "36",
         name: "36K.G.F: Chapter 2 ",
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7",
         url:"https://youtu.be/bUR_FKt7Iso",
         movieType:"7",
         showRating:"5"
         
         },
         {
         
         id: "37",
         name: "37Baahubali 2: The Conclusion",
         image: "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL75_UX190_CR0,2,190,281_.jpg",
         url:"https://youtu.be/11OWuPcElJw",
         movieType:"7",
         showRating:"5"
         },
         {
         
         id: "38",
         name: "38Pushpa: The Rule",
         image: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
         url:"https://youtu.be/11OWuPcElJw",
         movieType:"7",
         showRating:"5"
         },
         {
         id: "39",
         name: "39Panchayat ",
         image: "https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_.jpg",
         url:"https://youtu.be/ohmp6Q5xfXg",
         movieType:"1234567",
         showRating:"5"
         
         
         },
         {
         id: "40",
         name: "40Asur:  ",
         image: "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_.jpg",
         url:"https://youtu.be/11OWuPcElJw",
         movieType:"741",
         showRating:"5"
         }
         ];
      

      
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



import React, { useEffect, useState } from 'react'
import { createMovieEndpoint } from '../../../services/apis';
import { apiConnector } from '../../../services/apiconnector';
import { filterDataType } from '../../../utils/helper';
import MovieCard from '../../common/MovieCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../slices/PaginationSlice';
import { movieCategoryName, moviesList } from '../../../utils/constant';
import { setSearchText } from '../../../slices/SearchTextSlice';

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
            dispatch(setPage(1));
             dispatch(setSearchText(""));
           
         } catch (error) {
           console.log(error);
         }
       })();

     },[]);


     const filteredMovies =filterDataType(searchText,allMovies);
     const NumOfPage=(Math.ceil(filteredMovies?.length/ItemInOnePage));

    

  return (
    <div className='mt-5'>


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


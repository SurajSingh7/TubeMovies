import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { createMovieEndpoint } from '../services/apis';
import HighlightText from '../components/core/WatchMovie/HighLightText';
import RandomMovies from '../components/core/WatchMovie/RandomMovies';
import Footer from '../components/common/Footer';
import Shimmer from '../components/common/Shimmer';
import getYouTubeID from 'get-youtube-id';

export const WatchMovie = () => {

  const {movieId}=useParams();
  const [movie,setMovie]=useState(null);

  const [link, setLink] = useState("");

  useEffect(()=>{

   (async function getMovies() {
    try {

            const res = await apiConnector("GET", createMovieEndpoint.GETMOVIES_API);
            const movieData=res?.data?.data?.filter( (movie) => movie?._id=== movieId )[0];
            setMovie(movieData);

            var id = getYouTubeID(movieData?.url);
            var response=await fetch(`https://utube-api.vercel.app/api/v1/utube/${id}`);
            var data=await response?.json();

            
            let vaildUrl=data?.data?.formats[2]?.url;
            if(!vaildUrl){
              vaildUrl=data?.data?.formats[1]?.url;
               if(!vaildUrl){
                vaildUrl=data?.data?.formats[0]?.url;
              }
            }
            setLink(vaildUrl);
          
          
    } catch (error) {
      console.log(error);
    }
  })();

},[]);



// id,name,image,url,movieType,
  const image=movie?.image;
  const movieName=movie?.name;
  console.log("suraj 3");
  
if(!movie) {
   return (<div> 
      <div className='bg-richblack-800 h-8 animate-pulse'></div>
      <div className='bg-richblack-700 h-8 animate-pulse'></div>
      <Shimmer/>
     </div>);

   }


  return (
    <>
    <div className=' mx-auto   flex w-11/12  max-w-maxContent flex-col justify-between '>
  

   {/*sec-1 path */}
     <div className='mt-3 mb-7 text-richblack-100 font-extrabold text-xl flex   justify-center items-center ' >
        <HighlightText text={movieName}/>
      </div>
     
     {/* sec-2 video */}
     <div className='  shadow-[10px_-5px_15px_-5px] shadow-richblack-800 bg-richblack-900'>


           <div className=" justify-between text-center flex items-start  flex-row-reverse  bg-richblack-900" >
               
               {/* image  */}
               <div className=' hidden lg:block w-[75%] shadow-[10px_-5px_25px_-5px m-5 '>
                    
                   <div className='flex justify-center -mr-16 '>
                      <img className=" w-[41%]  hover:shadow-caribbeangreen-200     bg-caribbeangreen-100 mr-10 shadow-[10px_-5px_25px_-5px] shadow-blue-200"  src={image} />
                   </div>

                  <div className='flex justify-center -mr-7'> 
                     <button className=' bg-caribbeangreen-200 items-center hover:scale-95   text-richblack-900  p-1 flex justify-center  rounded-md m-5 font-extrabold text-lg'> Add To Favorate</button> 
                  </div>

               </div>


                {/* video */}
               <div className=' border-b-pure-greys-800  border-2 border-richblack-500 '>

                    <video controls= "controls" id="player"  muted poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1696163189/moviesstart_lxwu0v.jpg" 
                     autoplay={"autoplay"}  loop="loop"  width="100%" src={link} >
                   </video>

                

                 {console.log(link,"suraj444")}
                   

                   
                   
               </div>


               {/* <div className=' border-b-pure-greys-800  mt-5 border-2 border-richblack-500 bg-white w-[112%] h-auto  '>
                    <iframe allowFullScreen style={{ width:"200%", height:"100vh"}}  src="https://embed.smashystream.com/playere.php?tmdb=4251"> </iframe>
              </div> */}

         </div>



     </div>


     {/* sec-4  */}
     <div className=' lg:hidden flex justify-center'>
        <div className=' bg-caribbeangreen-200 items-center hover:scale-95  text-richblack-900  p-1 flex justify-center  rounded-md m-5 font-extrabold text-lg'> 
         <button> Add To Favorate</button> 
        </div>
    </div>
     
     <RandomMovies/>
 
      </div>
          <Footer />

   </>


  )
}

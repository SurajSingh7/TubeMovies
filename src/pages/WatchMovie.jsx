import React from 'react'
import {  useParams } from 'react-router-dom'

import Shimmer from "../components/common/Shimmer";
import useStreamLink from "../utils/useStreamLink";
import { moviesList } from "../utils/constant";



export const WatchMovie = () => {

  const {movieId}=useParams();

  const movie=moviesList[movieId];

// id,name,image,url,movieType,
  const url=movie?.url;
  const LinkType=movie?.linkType;
  const image=movie?.image;
  const movieName=movie?.name;
  let link="";

  const urlInfo=useStreamLink(url);

  if(LinkType=="youtube"){
     link=urlInfo?.formats[2]?.url;
  }

  // link=urlInfo?.formats[2]?.url;
  if(LinkType=="other"){
     link=url;
  }
 
  console.log(link,"su23");

  
 if(!movie) return ( <Shimmer />);


  return (
    <div className=' mx-auto   flex w-11/12  max-w-maxContent flex-col justify-between '>
    
   {/*sec-1 path */}
     <div className='mt-3 mb-7 text-richblack-100 font-extrabold text-xl flex   justify-center items-center ' >{movieName}</div>
     
     {/* sec-2 video */}
     <div className='  shadow-[10px_-5px_15px_-5px] shadow-richblack-800 bg-richblack-900'>



        

           <div className=" justify-between text-center flex items-start  flex-row-reverse  bg-richblack-900" >
               
               {/* image  */}
               <div className=' hidden lg:block w-[75%] shadow-[10px_-5px_25px_-5px m-5 '>
                    
                   <div className='flex justify-center -mr-16 '>
                      <img className=" w-[41%]  hover:shadow-caribbeangreen-200     bg-caribbeangreen-100 mr-10 shadow-[10px_-5px_25px_-5px] shadow-blue-200"  src={image} />
                   </div>

                  <div className='flex justify-center -mr-7'> 
                     <button className=' bg-caribbeangreen-200 items-center  text-richblack-900  p-1 flex justify-center  rounded-md m-5 font-extrabold text-lg'> Add To Favorate</button> 
                  </div>

               </div>

                {/* video */}
               <div className=' border-b-pure-greys-800  hover:border-2 hover:border-richblack-600 bg-pink-200'>
                    <video controls= "controls" id="player" tabindex="0"  muted poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1696163189/moviesstart_lxwu0v.jpg" 
                     autoplay="autoplay" loop="loop"  width="100%" src={link} >
                   </video>
               </div>
         </div>



     </div>


     {/* sec-4  */}
     <div className=' lg:hidden flex justify-center'>
        <div className=' bg-caribbeangreen-200 items-center  text-richblack-900  p-1 flex justify-center  rounded-md m-5 font-extrabold text-lg'> 
         <button> Add To Favorate</button> 
        </div>
    </div>
     


     {/* <div className='h-24 bg-black'></div> */}




      </div>

    


  )
}

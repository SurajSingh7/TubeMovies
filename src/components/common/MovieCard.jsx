// Movie card component: Image, name, cuisine
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
const MovieCard= ({ movie ,path}) => {
          
      const name=movie?.name;
      const image=movie?.image;
      const navigate=useNavigate();



    //  name=name.slice(0,18);
 
    return (


      <>
        <div className=" movieCard  hover:scale-105  rounded-lg shadow-[1px_-1px_8px_-2px] shadow-richblue-300 sm:w-[22.5%] md:w-[22.96%] lg:w-[17.7%]" 
        onClick={ (path)? ()=> {  window.open(`/movie/${movie?._id}`,"_self")  }:() => navigate(`/movie/${movie?._id}`) }

       >
            <div className="posterBlock ">
                 <img src={image} className='lazy-load-image-background'/>
            </div>

            <div className="">
               <h2 className="  font-bold flex justify-center  mt-2 mb-2 items-center text-white">{name}</h2>
            </div>
        </div>
      </>
    );
  };
  
  export default MovieCard;
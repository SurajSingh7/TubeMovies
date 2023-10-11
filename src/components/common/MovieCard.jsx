// Movie card component: Image, name, cuisine
const MovieCard= ({ image, name, }) => {

     name=name.slice(0,18);
 
    return (


      <>

     <div className="hover:scale-105">
      {/* For pc */}
      <div className=" hidden lg:block   mb-5 mt-3  w-52 h-[350px]   m-3 xl:m-3  rounded-lg p-1  shadow-2xl bg-richblack-800 ">
         
        <div className="">
        <img className=" w-[200px] h-[300px] items-center"  src={image} />
        <h2 className=" my-2 font-bold text-white">{name}</h2>
        </div> 
       
      </div>


       {/* For tablet */}
      <div className="   hidden md:block  w-48 h-[320px]  m-3  lg:hidden rounded-lg p-1  shadow-2xl  ">
         
         <div className="">
         <img className=" w-[184px] h-[276px] items-center"  src={image} />
         <h2 className=" my-2 font-bold text-white">{name}</h2>
         </div> 
        
       </div>



       {/* For mobile */}

       <div className="  md:hidden  w-36 h-[247px]  m-2 sm:m-3  lg:hidden rounded-lg p-1  shadow-2xl  ">
         
         <div className="">
         <img className=" w-[138px] h-[207px] items-center"  src={image} />
         <h2 className=" my-2 font-semibold text-sm text-white">{name}</h2>
         </div> 
        
       </div>

       </div>


      </>
    );
  };
  
  export default MovieCard;
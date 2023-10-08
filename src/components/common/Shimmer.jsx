
const Shimmer =()=>{
    return(
       
        <>
    
        <div className=" flex flex-wrap  justify-center   sm:justify-center  xl:justify-evenly items-center text-center">
           {   Array(20).fill("").map(   (e,index)=> { return (
               <div key={index} className="animate-pulse mt-5"> 
                
                    <div className="hidden lg:block   mb-5 mt-3  w-52 h-[350px]   m-3 xl:m-3  rounded-lg p-1  shadow-2xl bg-richblack-700 "></div>
                    <div className=" hidden md:block  w-48 h-[320px]  m-3  lg:hidden rounded-lg p-1  shadow-2xl bg-richblack-700 "></div>
                    <div className=" md:hidden  w-36 h-[247px]  m-2 sm:m-3  lg:hidden rounded-lg p-1  shadow-2xl bg-richblack-700"></div>
                
                </div>)
          
               }
            ) }

        </div> 
           
        </>
    )
}

export default Shimmer;
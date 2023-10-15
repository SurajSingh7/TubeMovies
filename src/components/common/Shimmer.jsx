
const Shimmer =()=>{
    return(
       
        <>
    
        <div className="flex flex-wrap gap-5 lg:gap-7 m-4">
           {   Array(20).fill("").map(   (e,index)=> { return (
         

                <div className="mt-5 bg-richblack-800 animate-pulse movieCard rounded-lg sm:w-[22.5%] md:w-[22.96%] lg:w-[17.7%]" >
                    <div className="posterBlock "> </div>
                </div>
    
                )
          
               }
            ) }

        </div> 
           
        </>
    )
}

export default Shimmer;
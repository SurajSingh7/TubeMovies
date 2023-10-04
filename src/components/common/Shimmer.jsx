const Shimmer =()=>{
    return(
       
        <>
        <div className="search-container p-6 h-8 bg-gray-200  items-center flex justify-center "> </div>
        
        <div className=" flex flex-wrap justify-center">
           { Array(15).fill("").map((e,index)=> { return (
           <div key={index} className="card w-56 h-80 p-2 m-2 shadow-lg bg-gray-300"></div>)} ) }

        </div>    

        </>
    )
}

export default Shimmer;
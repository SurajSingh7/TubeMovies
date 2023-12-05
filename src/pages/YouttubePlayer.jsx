import React, { useState } from 'react'
import useStreamYoutube from '../utils/useStreamYoutube';
import { UrlNetworkStream } from '../components/core/WatchMovie/UrlNetworkStream';
import { useSelector } from 'react-redux';

export const YouttubePlayer = () => {

  const [url, setUrl] = useState("");
  let link=null;
  const [flag, setFlag] = useState(false);
  const {urlData} = useSelector((state)=>state.urlData);

  function playVideo(){
      console.log(url);
      setFlag(true);

      console.log(urlData,urlData?.status);

  }


  return (


        <div className='font-extrabold text-3xl text-richblack-50 m-3 justify-center items-center h-screen w-11/12 mx-auto max-w-maxContent'>

          { (flag) && < UrlNetworkStream url={url} />}
          
          {/* section-1 */}
          <div>
            <div className=' text-[#0f9d58] flex justify-center sm:text-3xl text-xl'>U-Tube Player</div>
            <div className='flex justify-center text-xs font-bold italic m-2 sm:hidden'>Watch any youtube video without ad's. </div>
            <div className=' justify-center text-sm font-bold italic m-2 hidden sm:flex'>you can Watch any youtube video without any ad's through youtube url.</div>
          </div>

          {/* section-2*/}
          <div className="  items-center flex justify-center h-12  mt-8">
            
                <input type="text" className=" text-sm sm:text-lg font-bold text-richblack-900  outline-pink-200
                  w-[90%]  sm:w-[65%]   md:w-[50%]   lg:w-[40%]  rounded-md h-10 sm:h-10 flex " 
                  placeholder="  Enter youtube video url " 
                  value={url}   onChange={(e)=>{ setUrl(e.target.value); setFlag(false) }} 
                />
                  

                <button className="  bg-gray-500    font-bold rounded-md  -mx-[86px]  pl-2 pr-1 h-[37px]
                  bg-[#0f9d58]  text-[#fff]  "  onClick={ playVideo }> 
                   Play!
                 </button>
                 
                 <button className="p-1 pl-3 pr-[9px] invisible"> 
                   Play!
                 </button>

          </div>

          {/* section-3 */}
          <div className='mt-8'>
            <div className=' flex-col items-center hidden sm:flex'>
                <video controls= "controls" id="player" tabindex="0"  muted  poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1696163189/moviesstart_lxwu0v.jpg" 
                  autoplay="autoplay"     loop="loop"  width="50%" src={ (urlData?.status==="fail")?null:urlData?.formats[2]?.url} >
               </video>
            </div>


            <div className='flex flex-col items-center sm:hidden'>
                <video controls= "controls" id="player" tabindex="0"  muted  poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1696163189/moviesstart_lxwu0v.jpg" 
                  autoplay="autoplay"     loop="loop" width="100%"  src={ (urlData?.status==="fail")?null:urlData?.formats[2]?.url} >
               </video>
            </div>


          </div>

          


        </div>  
      
      // {/* { (flag) && < UrlNetworkStream url={url} />} */}
          

          /* <div className=" p-6 h-8  items-center flex justify-center ">
            
            <input type="text" className="  w-[75%]  sm:w-[65%]   md:w-[50%] outline-none  lg:w-[36%]  rounded-none h-8 flex " placeholder="  Search movies here..."
              value={url}   onChange={(e)=>{ setUrl(e.target.value); setFlag(false) }} 
            />
              
            <button className="p-[4.4px]  bg-gray-500    font-bold rounded-none   bg-[#0f9d58] hover:bg-caribbeangreen-500 text-[#fff]  " 
             onClick={ playVideo }
            >  
             Play</button>

          </div> */


          /* <div>
              <video controls= "controls" id="player" tabindex="0"  muted  poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1696163189/moviesstart_lxwu0v.jpg" 
                  autoplay="autoplay"     loop="loop"  width="50%" src={ (urlData?.status==="fail")?null:urlData?.formats[2]?.url} >
               </video>
          </div> */



  )
}

import React, { useEffect, useState } from 'react'
import getYouTubeID from 'get-youtube-id';
import { toast } from "react-hot-toast"
import ContactBanner from '../components/ContactPage/ContactBanner';
import Footer from '../components/common/Footer';
import banner from "../../src/assets/Images/signup.jpg"
import HighlightText from '../components/core/WatchMovie/HighLightText';
// import banner from "../../assets/Images/signup.jpg"

export const YouttubePlayer = () => {

  const [url, setUrl] = useState("");
  const [flag, setFlag] = useState(true);
  const [link, setLink] = useState("");
  const [youtubeId, setyoutubeId] = useState("");

  useEffect(()=>{

    (async function getData() {
     try {
          if(youtubeId){
            var toastId = toast.loading("Loading...")
            var response=await fetch(`https://utube-api.vercel.app/api/v1/utube/${youtubeId}`);
            var data=await response?.json();
            setLink(data?.data?.formats[2]?.url);
            toast.dismiss(toastId);
            toast.success("Done 💕");
            } 
       
     } catch (error) {
       console.log(error);
        toast.dismiss(toastId);
        toast.error("Sorry! Link was not found.")
     }
   })();

 },[youtubeId,flag]);



  console.log("suraj 3");

  function playVideo(){
     setLink("");
     setFlag(!flag)
     var id = getYouTubeID(url);
     if(id==null) toast.error("Enter vaild url 🤔");
     console.log(id,"s4");
     setyoutubeId(id);
  }


  return (

    <>

    <div className="mx-auto  flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row  h-screen">

      <div className=''>
        <div className='font-extrabold text-3xl text-richblack-50 m-3 justify-center items-center  w-11/12 mx-auto max-w-maxContent'>


                
        {/* section-1 */}
        <div className=' text-[#0f9d58] flex justify-center sm:text-3xl text-[30px] '>U-Tube Player</div>
       

        {/* section-2*/}
        <div className="  items-center flex justify-center h-12  mt-6">

            <input type="text" className=" text-xs font-bold text-richblack-900  outline-none 
              w-[90%]  sm:w-[65%]   md:w-[50%]   lg:w-[55%]  rounded-md h-10 sm:h-10 flex " 
              placeholder=" Enter youtube video url " 
              value={url}   onChange={(e)=>{ setUrl(e.target.value)}} 
            />
              
            <div className='bg-white rounded-md p-[1.06px] -mx-[10px]'>
              <button className="  bg-gray-500    font-bold rounded-md   pl-2 pr-1 h-[37px]  hover:bg-pink-200 hover:scale-95
                bg-[#0f9d58]  text-[#fff]  "  onClick={ playVideo }> 
                  Play!
              </button>

            </div>
            

        </div>


        {/* section-3 */}
        <div className='mt-8'>
        <div className=' flex-col items-center hidden sm:flex'>
            <video controls= "controls" id="player" tabindex="0"  muted  poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v169616189/moviesstart_lxwu0v.jpg" 
              autoplay="autoplay"     loop="loop"  width="80%" src={link} >
            </video>
        </div>


        <div className='flex flex-col items-center sm:hidden'>
            <video controls= "controls" id="player" tabindex="0"  muted  poster="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1696163189/moviesstart_lxwu0v.jpg" 
              autoplay="autoplay"     loop="loop" width="100%"  src={link} >
            </video>
        </div>


        </div>




        </div>
      </div>
        
    {/* Banner Details */}
      <div className='lg:w-[50%] mt-5 rounded-2xl invisible lg:visible '>

      
      

        <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">

        <div className=' lg:text-lg xl:text-2xl flex justify-center items-center   font-bold  pl-8 p-2 shadow-[10px_-5px_45px_-5px] shadow-caribbeangreen-200 rounded-xl hover:scale-105'>
          <HighlightText text={ "Watch any youtube video Without ad's" }/>
        </div>
    

          <img src={banner} alt="banner" loading="lazy" className=" shadow-[10px_-5px_45px_-5px] shadow-caribbeangreen-300 hover:scale-105" />
          {/* #DC143C */}

        </div>
      </div>  

  
  </div>

  <Footer/>

  </>



     


      


  )
}

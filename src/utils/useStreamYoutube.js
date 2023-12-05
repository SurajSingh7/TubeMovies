import axios from 'axios';
import { useEffect, useState } from 'react';
import getYouTubeID from 'get-youtube-id';


const rapidapiKey1=process.env.REACT_APP_RAPIDAPI_KEY1;
const rapidapiKey2=process.env.REACT_APP_RAPIDAPI_KEY2;
const rapidapiHost=process.env.REACT_APP_RAPIDAPI_HOST;
const streamUrl=process.env.REACT_APP_STREAM_URL;


const useStreamYoutube=(youtubeUrl)=>{
   
  var youtubeId = getYouTubeID(youtubeUrl);

    const[urlInfo,setUrlInfo]=useState(null);

    useEffect(()=>{
      getYoutubeUrlInfo();
    },[]);
  

    async function getYoutubeUrlInfo(){

    let options = {
        method: 'GET',
        url: streamUrl,
        params: {id: youtubeId},
        headers: {
          'X-RapidAPI-Key': rapidapiKey1,
          'X-RapidAPI-Host': rapidapiHost
        }
      };
      
      try{
          var response = await axios.request(options);
          setUrlInfo(response.data);

      } catch (error) {
         
           try{
                options.headers['X-RapidAPI-Key']=rapidapiKey2;
                response = await axios.request(options);
                setUrlInfo(response.data);
             } catch (error) {
               console.error(error);
             }
      }

   }

  return urlInfo;
}

export default useStreamYoutube;
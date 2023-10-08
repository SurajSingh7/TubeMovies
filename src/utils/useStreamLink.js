import axios from 'axios';
import { rapidapiHost, streamUrl } from './secrets';
import { useEffect, useState } from 'react';

import getYouTubeID from 'get-youtube-id';
import { rapidapiKey1,rapidapiKey2 } from './secrets';
import { setUrlData } from '../slices/urlData';
import { useDispatch } from 'react-redux';
// const rapidapiKey1=process.env.rapidapiKey1;
// const rapidapiKey2=process.env.rapidapiKey2;
// const rapidapiHost=process.env.rapidapiHost;
// const streamUrl=process.env.streamUrl;


const useStreamLink=(youtubeUrl)=>{
   
  var youtubeId = getYouTubeID(youtubeUrl);
  const dispatch=useDispatch();
  
    // const[urlInfo,setUrlInfo]=useState(null);
    // let urlInfo="";

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
          dispatch(setUrlData(response.data));
      } catch (error) {
         
           try{
                options.headers['X-RapidAPI-Key']=rapidapiKey2;
                response = await axios.request(options);
                // setUrlInfo(response.data);
                dispatch(setUrlData(response.data));
                // urlInfo=response.data;
             } catch (error) {
               console.error(error);
             }
      }

   }

  // return urlInfo;
  
}

export default useStreamLink;













// import axios from 'axios';
// import { rapidapiHost, streamUrl } from './secrets';
// import { useEffect, useState } from 'react';

// import getYouTubeID from 'get-youtube-id';
// import { rapidapiKey1,rapidapiKey2 } from './secrets';
// // const rapidapiKey1=process.env.rapidapiKey1;
// // const rapidapiKey2=process.env.rapidapiKey2;
// // const rapidapiHost=process.env.rapidapiHost;
// // const streamUrl=process.env.streamUrl;


// const useStreamLink=(youtubeUrl)=>{
   
//   var youtubeId = getYouTubeID(youtubeUrl);
  
//     const[urlInfo,setUrlInfo]=useState(null);

//     useEffect(()=>{
//       getYoutubeUrlInfo();
//     },[]);
  

//   async function getYoutubeUrlInfo(){

//     let options = {
//         method: 'GET',
//         url: streamUrl,
//         params: {id: youtubeId},
//         headers: {
//           'X-RapidAPI-Key': rapidapiKey1,
//           'X-RapidAPI-Host': rapidapiHost
//         }
//       };
      
//       try{
//           var response = await axios.request(options);
//           setUrlInfo(response.data);

//       } catch (error) {
         
//            try{
//                 options.headers['X-RapidAPI-Key']=rapidapiKey2;
//                 response = await axios.request(options);
//                 setUrlInfo(response.data);
//              } catch (error) {
//                console.error(error);
//              }
//       }

//    }

//   return urlInfo;
// }

// export default useStreamLink;

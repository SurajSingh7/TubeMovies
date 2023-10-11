import "./App.css";
import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"

import OpenRoute from "./components/core/Auth/OpenRoute"

import Login from "./pages/Login"
import Signup from "./pages/Signup"


import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";

import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute.jsx";

import Error from "./pages/Error"
import Settings from "./components/core/Dashboard/Settings";
import {useSelector } from "react-redux";


import { ACCOUNT_TYPE } from "./utils/constants";
import { WatchMovie } from "./pages/WatchMovie";
import { AddMovie } from "./components/core/Dashboard/AddMovie/AddMovie";
import { Category } from "./pages/Category";
import { YouttubePlayer } from "./pages/YouttubePlayer";
import Body from "./components/core/HomePage/Body";





function App() {

  
  const { user } = useSelector((state) => state.profile)

  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    
    <Navbar/>
   
    <Routes>


      <Route  element={ <Home/> }>
          <Route path="/" element={<Body/>} />
          <Route path="/category/:name" element={<Category/>} />
      </Route>

      
      <Route path="movie/:movieId" element={<WatchMovie/>} />
      


      {/* Auth */}
      <Route path="signup"
       element={<OpenRoute>  <Signup/> </OpenRoute>} 
       />

       
      <Route path="login" 
      element={<OpenRoute>  <Login/>  </OpenRoute> } 
      />

      <Route  path="verify-email" 
      element={  <OpenRoute> <VerifyEmail /></OpenRoute>}
       />
      
      <Route path="update-password/:id" 
      element={<OpenRoute> <UpdatePassword /> </OpenRoute>} 
      /> 

      <Route path="forgot-password" 
      element={<OpenRoute>  <ForgotPassword /></OpenRoute>} 
      />




      <Route path="/contact" element={<Contact/>} />
      <Route path="/youtube-video-player" element={<YouttubePlayer/>} />

   
     <Route  element={ <PrivateRoute> <Dashboard /> </PrivateRoute> }>

        <Route path="dashboard/my-profile" element={<MyProfile />} />
        <Route path="dashboard/Settings" element={<Settings />} />
       {
         user?.accountType === ACCOUNT_TYPE.STUDENT && (
           <>
           <Route path="dashboard/add-to-favorite" element={<div>suraj singh</div>} />
           <Route path="dashboard/network-stream" element={<div>suraj singh</div>} />
          </>
         )
       }

     {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/add-movie" element={  <AddMovie/> }  />
          </>
        )
      }
    
    </Route>


    
      <Route path="*" element={<Error />} />


    </Routes>

   </div>
  );
}

export default App;

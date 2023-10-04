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



import Error from "./pages/Error"
// import Settings from "./components/core/Dashboard/Settings";
import {useSelector } from "react-redux";

import { WatchMovie } from "./pages/WatchMovie";


function App() {

  
  const { user } = useSelector((state) => state.profile)

  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    
    <Navbar/>
   
    <Routes>

      <Route path="/" element={<Home/>} />
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

      <Route path="*" element={<Error />} />


    </Routes>

   </div>
  );
}

export default App;

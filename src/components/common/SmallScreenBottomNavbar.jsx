
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation} from "react-router-dom"

import * as Icons from "react-icons/vsc"
import { VscSettingsGear } from "react-icons/vsc"
import { sidebarLinks } from "../../data/dashboard-links"


 
export default function SmallScreenBottomNavbar({handleCrossButton, isClose}) {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const location = useLocation()



  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

//  transition-all duration-200 backdrop-blur-xl 
return (
     <>

    { (token) &&
    <div
       className={` flex flex-col fixed right-0  bottom-0 h-[50px] md:hidden  justify-center z-[1000]  bg-white  w-[100%] `}
      >
  
     <div className= {`flex flex-row-reverse justify-between  mx-4 sm:justify-center sm:gap-10 items-center `} >
 
        {(token) &&
          <>
          { sidebarLinks.map((link) => (
            <>
              { (link.name == "My Profile" || link.name == "Settings" )? (
                <Link to={link?.path}>
                  <div key={link?.id}>  

                    <p className={`${ matchRoute(link?.path) ? "text-yellow-200": "text-richblack-600" }`}>
                     
                      <div className=" font-semibold">
                         <div className="flex justify-center  h-[20px]">{ Icons[link.icon]()}</div>
                         <div  className="text-[9px]">{link.name}</div>
                      </div>

                    </p>
                  </div>
                </Link>
                ) :
                (
                   link?.type === user?.accountType && (
                  <Link to={link?.path} >
                    <div key={link?.id} >  
                      <p className={`${ matchRoute(link?.path) ? "text-yellow-200" : "text-richblack-700" }`} >

                         <div className="font-semibold ">
                            <div className="flex justify-center h-[20p x]">{Icons[link.icon]()}</div>
                            <div className="text-[9px]">{link.name}</div>
                         </div>
                            
                        </p>
                    </div>
                  </Link>
                  )
                )
              }   
            </>
          )) }

            {/* For Settings */}
          <Link to="/dashboard/settings">
                    <div>
                      <p  className={`${ matchRoute("/dashboard/settings") ? "text-yellow-200" : "text-richblack-700" }`} >
                       
                        <div className=" font-semibold">
                            <div className="flex justify-center  h-[20px]">{ <VscSettingsGear/> }</div>
                            <div className="text-[9px]"> Settings </div>
                         </div>

                      </p>
                  </div>
          </Link>      
         </>
        }
                                                      
     
      </div>

    </div>  
     }

    </>
  )
}


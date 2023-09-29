import React from 'react'
import { NavigationLink } from '../../data/navigation-links'
import { useLocation } from 'react-router-dom'
import { Link ,matchPath} from 'react-router-dom'
export const Navigation = () => {

    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }

  return (
    <div>

        <div
            className={` flex-row md:flex h-[63px] md:h-[63px] items-center justify-center   border-b-richblack-700  
              w-full  mt-3 mb-1
        
            transition-all duration-200  ` }
        >

   <div className="  mx-4  m-4 md:m-0 justify-around gap-x-1  sm:justify-center sm:gap-x-10 md:gap-x-0 flex w-11/12 max-w-maxContent items-center  md:justify-between ">
            

            {/* Navigation links  className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md font-extrabold" */}
            <nav className=" md:block ">
                <ul className="flex  md:gap-x-8 font-semibold text-[17px] text-richblack-25 ">
                {NavigationLink.map((link, index) => (
                    <li key={index}>

                        <Link to={link?.path} >
                        

                        {/* <p className={`${  matchRoute(link?.path) ? "text-white " : "text-richblack-900 " } hidden md:block 
                          text-black rounded-md font-bold   p-2 m-2 bg-caribbeangreen-200
                        `}>
                            {link.title}
                        </p> */}

                         <div className="  shadow-[1px_-1px_8px_-2px] shadow-richblue-200 group  w-fit rounded-md bg-richblack-800 p-1 font-semibold text-richblack-50   drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                           <div className="flex flex-row items-center gap-1 rounded-full px-2 py-[2px] transition-all duration-200 group-hover:bg-richblack-900">
                              <p className={`${  matchRoute(link?.path) ? "text-[#7FFFD4]" : " " } text-sm`}>
                              {link.title}</p>

                            </div>
                        </div>


                        
                        </Link>

                    </li>
                ))}
                </ul>
            </nav>

         


            </div>


        </div>



    </div>
  )
}

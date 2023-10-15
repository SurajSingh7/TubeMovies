import React from 'react'
import { NavigationLink } from '../../data/navigation-links'
import { useLocation } from 'react-router-dom'
import { Link ,matchPath} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPage } from '../../slices/PaginationSlice'
export const Navigation = () => {

    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }
      const dispatch=useDispatch();

  return (

          <div>

          <nav className="">
          <ul className="flex gap-x-5  md:gap-x-6  mt-5  justify-center lg:gap-x-7  flex-wrap  ">
          {NavigationLink.map((link, index) => (
              <li key={index} className='mb-5'>


                 {(link.path=="/")&&  dispatch(setPage(1)) && <></>}

                  <Link to={link?.path} >
                    <div className="  shadow-[1px_-1px_8px_-2px] shadow-richblue-200 group  w-fit rounded-md bg-richblack-800 p-1 font-semibold text-richblack-50   drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                      <div className="flex flex-row items-center gap-1 rounded-full py-[1px]  md:px-3 lg:px-4 xl:px-5 2xl:px-5  md:py-[2px] transition-all duration-200 group-hover:bg-richblack-900">
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
  )
}


import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5"> {title} </h1>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">

               <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            /> 
             <div className="flex flex-col gap-6 bg-richblack-800 p-4 lg:p-6">
     
                  <img src={image} alt="banner" loading="lazy" className=" shadow-[10px_-5px_45px_-5px] shadow-blue-200" />

              </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Template;
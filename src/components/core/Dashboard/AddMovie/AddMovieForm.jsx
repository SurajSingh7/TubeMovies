import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import Tab from "../../../common/Tab"
import { Category } from "./Category"
import { createMovie } from "../../../../services/operations/movieAPI"


function AddMovieForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [LinkType, setLinkType] = useState("Youtube")

  const [formData, setFormData] = useState({
    name:"",
    url: "",
    image: "",
    category: "",
  })


//   Name, Url, Image, Category

  const {name, url, image, category} = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    // const movieData = {
    //    LinkType,
    //   ...formData,
    // }

    
    // Send OTP to user for verification
    // dispatch(sendOtp(formData.email, navigate))

    dispatch( createMovie( LinkType, name, url, image,category,navigate) );

        // or

    // var x=createMovie( LinkType, name, url, image,category,navigate);
    // x(dispatch);



    // Reset name, url, image, category
    setFormData({ name: "", url: "", image: "", category: ""});
    setLinkType("Youtube");
  }

 
  const linkData = [
    {
      id: 1,
      tabName: "Youtube",
      type: "Youtube",
    },
    {
      id: 2,
      tabName:"Network Stream",
      type: "NetworkStream",
    },
  ]

  return (
    <div>
      {/* Tab */}
      <Tab tabData={linkData} field={LinkType} setField={setLinkType} />

      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
       
         {/* Movie Name */}
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Movie Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter movie name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          
          {/* Movie Url */}
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Movie Url <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="url"
              value={url}
              onChange={handleOnChange}
              placeholder="Enter movie url"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>


          {/* Movie Image */}
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Movie Image <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="image"
              value={image}
              onChange={handleOnChange}
              placeholder="Enter movie image url"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>

          {/* category */}
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Category <sup className="text-pink-200">*</sup>
            </p>
            <div className="text-richblack-100 text-xs my-3">
               <Category/>
            </div>
            <input
              required
              type="text" 
              name="category"
              value={category}
              onChange={handleOnChange}
              placeholder="ex-13"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
      

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Submit
        </button>


        <div className="h-8"></div>
      </form>
    </div>
  )
}

export default  AddMovieForm;
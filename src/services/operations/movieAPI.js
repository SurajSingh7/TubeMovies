import { toast } from "react-hot-toast"

import { setLoading} from "../../slices/authSlice"
import { apiConnector } from "../apiconnector"
import { createMovieEndpoint } from "../apis";

const { CREATEMOVIE_API } = createMovieEndpoint;


export function createMovie( linkType, name, url, image,category,navigate )

  {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))

      try {
        const response = await apiConnector("POST", CREATEMOVIE_API, {linkType, name, url, image,category })
   
    
        console.log("CREATE MOVIE API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Movie create Successful")
        // navigate("/login")
      } catch (error) {
        console.log("CREATE MOVIE API ERROR............", error)
        toast.error("Movie Creation Failed")
        // navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


  
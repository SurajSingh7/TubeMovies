
// Component Imports
import Footer from "../components/common/Footer"
import { Navigation } from "../components/common/Navigation"
import { SearchFilter } from "../components/common/SearchFilter"
import { Link, Outlet } from "react-router-dom"


function Home() {

  return (

    <>
    <div className="flex  w-11/12  mx-auto max-w-maxContent flex-col gap-3 ">
        <Navigation/>
        { <Link to="/"> <SearchFilter flag={"2"} /> </Link> }
    </div>

      <div className="w-[99.99%] flex  mx-auto max-w-maxContent flex-col gap-3"> 
           <Outlet/>
      </div>
     
      <Footer />
   </>
  )
}

export default Home


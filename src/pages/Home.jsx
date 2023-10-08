
// Component Imports
import Footer from "../components/common/Footer"
import { Navigation } from "../components/common/Navigation"
import Body from "../components/core/HomePage/Body"
import { SearchFilter } from "../components/common/SearchFilter"



function Home() {

  return (

    <>
    <div className="flex  w-11/12  mx-auto max-w-maxContent flex-col gap-3 ">

        <Navigation/>
        <SearchFilter flag={"2"} />
        {/* <Body/> */}
    </div>

      <div className="w-[99.99%] flex  mx-auto max-w-maxContent flex-col gap-3"> 
          <Body/>
      </div>
     
      <Footer />
   </>
  )
}

export default Home


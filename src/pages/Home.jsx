
// Component Imports
import Footer from "../components/common/Footer"
import { Navigation } from "../components/common/Navigation"
import Body from "../components/common/Body"
import { SearchFilter } from "../components/common/SearchFilter"



function Home() {
  return (

    <>
    <div className="flex  w-11/12  mx-auto max-w-maxContent flex-col gap-3 border-2 border-caribbeangreen-300">

        <Navigation/>
        <SearchFilter flag={"2"} />
        <Body/>
        <div className="h-20"></div>

    </div>



      <Footer />
   </>
  )
}

export default Home


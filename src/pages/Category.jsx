import React from 'react'
import { Navigation } from '../components/common/Navigation'
import { SearchFilter } from '../components/common/SearchFilter'
import Footer from '../components/common/Footer'
import { Link, useParams } from 'react-router-dom'
import { CategoryMovies } from '../components/core/Category/CategoryMovies'
import Body from '../components/core/HomePage/Body'

export const Category = () => {

    const {name}=useParams();
    const id=name.charAt(name.length-1);
    
  return (
    <div>


        <div className="flex  w-11/12  mx-auto max-w-maxContent flex-col gap-3 ">

           <Navigation/>
           { <Link to="/category/all9"> <SearchFilter flag={"2"} /> </Link> }
           
        </div>

        <div className="w-[99.99%] flex  mx-auto max-w-maxContent flex-col gap-3 "> 
             {(id=="9")?
                <Body/>
                :
                <CategoryMovies movieText={id}/> 
            }
        </div>

    
             <Footer />

    </div>
  )
}

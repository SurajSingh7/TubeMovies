import React from 'react'
import { useParams } from 'react-router-dom'
import { CategoryMovies } from '../components/core/Category/CategoryMovies'


export const Category = () => {

    const {name}=useParams();
    const id=name.charAt(name.length-1);
    
  return (
    <div>
          
         <CategoryMovies movieText={id}/>  

    </div>
  )
}

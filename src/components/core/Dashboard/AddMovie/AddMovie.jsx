import React from 'react'
import SignupForm from '../../Auth/SignupForm'
import AddMovieTemplate from './AddMovieTemplate'
import image from '../../../../../src/assets/Images/signup.jpg'


export const AddMovie = () => {
  return (



    <div className=''>


    <AddMovieTemplate
      title="Add Movie 💫"
      description1=""
      description2=""
      image={image}
      formType="signup"
    />


    </div>
  )
}

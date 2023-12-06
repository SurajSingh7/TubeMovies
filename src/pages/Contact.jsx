import React from "react"

import Footer from "../components/common/Footer"
import ContactForm from "../components/ContactPage/ContactForm"
import ContactBanner from "../components/ContactPage/ContactBanner"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-10 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        
        {/* Contact Details */}
        <div className="lg:w-[40%]">  <ContactBanner /> </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]"> <ContactForm /> </div>

      </div>


        <div className="h-10"></div>
          <Footer />

    </div>
  )
}

export default Contact;
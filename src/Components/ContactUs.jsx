import React from 'react'
import IMG from "../Assets/img4.jpg"

const ContactUs = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <img
        className="object-cover h-full w-full absolute -z-10"
        src={IMG}
        alt={"math "}
      />
     
     {/* <div className='bg-black w-full h-[90vh] opacity-[0.2]'></div> */}
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-black px-4 text-center">
        <h1 className="py-2">
          <span className="blue">Menya</span> Math
        </h1>
        <h2>Online Mathematics Learning Platform</h2>
        <p className=" text-lg py-4 w-[70%]  ">
          You want to learn math? You are in the right place , We are here to
          help you learn math online and at the same time you can practice math
          with your friends and family too anytime and anywhere.
        </p>
        <div>
          <button className="m-2 rounded-3xl py-2 ">About Us</button>
          <button className="m-2 rounded-3xl py-2">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
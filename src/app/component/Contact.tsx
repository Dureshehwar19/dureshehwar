"use client"
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Link from 'next/link';

const Contact = () => {
  
    useEffect (() => {
        AOS.init({
          easing: "ease-in-out-back",
          duration: 1200,
          delay: 90,
          mirror: true,
          anchorPlacement:"bottom-bottom",
          offset: 160,
        });
        AOS.refresh()
    })
    return (
    <div id='Contact'>
      <>
  
  <section className="text-gray-600 body-font relative bg-fixed bg-cover bg-center custom-image">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
      <h1 data-aos="fade-down" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Contact
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Feel free to Contact me.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              Send Message
            </button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-red-500">dures0442@gmail.com</a>
            
            <span className="inline-flex">
              <a className=" ml-4 text-gray-500">
              <Link 
      target="blank"
      href={"https://www.facebook.com/people/Dureshehwar-Siddiqui/pfbid02HvP1hZ6kpGwXnAVPCvPCS3MRSzB7wdmMoS9Z7otKPyUqC4NDQfaKqbCQQzxNXmUdl/?mibextid=ZbWKwL"}
       className="ml-3 text-gray-500">
      <FaFacebook className='hover:text-[#1100ffa9]' />
      </Link>
              </a>
              <a className="ml-4 text-gray-500">
              <Link 
      target='blank'
      href={"https://www.linkedin.com/in/dureshehwar-siddiqui-17a588333/"}
      className="ml-3 text-gray-500">
      <FaLinkedinIn className='hover:text-[#0059ff]' />
      </Link>
              </a>
              <a className="ml-4 text-gray-500">
              <Link
      target='blank'
      href={"https://github.com/Dureshehwar19"}
      className="ml-3 text-gray-500">
      <FaGithubSquare className='hover:text-[#420a3bf1]' />
      </Link>
              </a>
              
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Contact

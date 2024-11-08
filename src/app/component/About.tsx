"use client"
import Image from 'next/image'
import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';


const About = () => {
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
    <div id='About'>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      className="object-cover object-center rounded mx-auto"
      alt="hero"
      width={600}
      height={300}
      src="/Pictures/me.png"
    />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 data-aos="fade-right" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Myself
      </h1>
      <p className="mb-5 leading-relaxed">
        I am a passionate and innovative web developer embarking on an exiting 
        journey in the tech world. With a strong foundation in programming languages
        like JavaScript, TypeScript,  HTML, CSS and frame work like NextJS and react.
        Outside coding, I enjoy exploring self-improvement, mental health
        and personal growth. 
                              
        Email:<a className="text-red-500">dures0442@gmail.com</a>
      </p>
      <div className="flex justify-center">
        <a target="blank" href={"../../Pictures/resume.png"}>
        <button className="inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          veiw CV
        </button>
        </a>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About

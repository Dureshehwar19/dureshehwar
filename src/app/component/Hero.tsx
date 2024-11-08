"use client"
import React from 'react'
import Image from 'next/image'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Link from 'next/link';
const Hero = () => {
 useEffect (() => {
  AOS.init({
    easing: "ease-in-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement:"bottom-bottom",
    offset: 160,
  });
  AOS.refresh()
 })
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 data-aos="fade-right" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hi, I am
        <br data-aos="fade-right" className="hidden lg:inline-block" />
        DureShehwar Siddiqui
      </h1>
      <div className='w-[190px] h-[2px] bg-red-950'></div>
      <p className="mb-8 leading-relaxed">
       
      To obtain a challenging role in software development
        where I can utilize my skills, experience to deliver innovtions
        and to secure a position as a skilled developer to cutting-edge projects
        and grow professionally.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15ref]"
        alt="hero"
        width={440}
        height={430}
        src= "/Pictures/profile.png"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero

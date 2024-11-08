"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Project = () => {
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
    <div id='Project'>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 data-aos="fade-up" className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        There are some projects of mine.
      </p>
    </div>
    <div className="flex flex-wrap -m-8">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            width={200} height={100}
            alt="project picture"
            className="absolute inset-0 w-full h-full object-cover object-center"
             src= "/Pictures/resume builder.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              The resume builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              resume
            </h1>
            <p className="leading-relaxed">
              this is the nextjs project which I created for people.
            </p>
            <Link target='blank' href={"https://milestone5-phi.vercel.app/"}>
            <p className="leading-relaxed text-red-500 hover:underline">view project...</p>
            </Link>
          </div>
        </div>
      </div>



    </div>
  </div>
</section>

    </div>
  )
}

export default Project

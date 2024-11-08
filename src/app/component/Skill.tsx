"use client"
import React from 'react'
import { GoDotFill } from "react-icons/go";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Skill = () => {
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
    <div id='Skill'>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 data-aos="fade-down" className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        MY Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 mr-3 inline-flex items-center justify-center rounded-full bg-red-950 text-white flex-shrink-0">
            <GoDotFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-red-500 h-1 rounded-xl w-full'></div>
          </div>
          <p className='font-bold text-red-500 text-right'>100%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
            <GoDotFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-red-500 h-1 rounded-xl w-[95%]'></div>
          </div>
          <p className='font-bold text-red-500 text-right'>95%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
            <GoDotFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-red-500 h-1 rounded-xl w-[65%]'></div>
          </div>
          <p className='font-bold text-red-500 text-right'>65%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
            <GoDotFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-red-500 h-1 rounded-xl w-[80%]'></div>
          </div>
          <p className='font-bold text-red-500 text-right'>80%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
            <GoDotFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next Js
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-red-500 h-1 rounded-xl w-[70%]'></div>
          </div>
          <p className='font-bold text-red-500 text-right'>70%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-5 h-5 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
            <GoDotFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              C++
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-red-500 h-1 rounded-xl w-[40%]'></div>
          </div>
          <p className='font-bold text-red-500 text-right'>40%</p>
            
          </div>
        </div>
      </div>



    </div>
  </div>
</section>

    </div>
  )
}

export default Skill

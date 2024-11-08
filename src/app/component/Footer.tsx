import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <svg   xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-900 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">DureShehwar</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 DureShehwar portfolio
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target="blank"
      href={"https://www.facebook.com/people/Dureshehwar-Siddiqui/pfbid02HvP1hZ6kpGwXnAVPCvPCS3MRSzB7wdmMoS9Z7otKPyUqC4NDQfaKqbCQQzxNXmUdl/?mibextid=ZbWKwL"}
       className="text-gray-500">
      <FaFacebook className='hover:text-[#1100ffa9]' />
      </Link>
      <Link 
      target='blank'
      href={"https://www.instagram.com/dureshehwar_08/profilecard/?igsh=aWhndXcyMzRpY3Iw"}
      className="ml-3 text-gray-500">
      <FaInstagram className='hover:text-[#ff008c]' />
      </Link>
      <Link
      target='blank'
      href={"https://github.com/Dureshehwar19"}
      className="ml-3 text-gray-500">
      <FaGithubSquare className='hover:text-[#420a3bf1]' />
      </Link>
      <Link 
      target='blank'
      href={"https://www.linkedin.com/in/dureshehwar-siddiqui-17a588333/"}
      className="ml-3 text-gray-500">
      <FaLinkedinIn className='hover:text-[#0059ff]' />
      </Link>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer

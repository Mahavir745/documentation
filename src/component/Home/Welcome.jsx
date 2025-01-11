import React from 'react'
import { SiGnuprivacyguard } from 'react-icons/si'

const Welcome = () => {
  return (
    <div className='w-[800px] p-[40px] mt-4 mb-4'>
      <h1 className='text-2xl font-semibold'>Explore your <span className='text-7xl flex items-center '>Documentation 
      <SiGnuprivacyguard className='text-5xl' />
        </span></h1>
      <p className='text-[14px] mb-8 border text-center bg-slate-100 text-gray-900 font-medium rounded-md'>Your ultimate hub for clear, concise, and comprehensive documentation! </p>
      <p className='w-[90%] border p-4 mt-20 rounded-md shadow-sm shadow-green-50 m-auto pt-4 text-xl pb-8'>
        We’re dedicated to making knowledge accessible and easy to navigate. Whether you’re here to learn, explore, or contribute, our well-structured documentation is designed to empower you...
      </p>
      <ul className='p-8 w-full text-[18px] bg-gray-100 text-gray-700 font-bold rounded-md shadow-md shadow-blue-300 mt-6'>
        <li className='pb-4'>
          <span>📖 Discover:</span> Dive into expertly crafted guides, step-by-step tutorials, and detailed reference materials.
        </li>
        <li className='pb-4'>
          <span>🔍 Search:</span> Quickly find exactly what you need with our powerful search tools.
        </li>
        <li className='pb-4'>
          <span>💡 Engage:</span> Share feedback, suggest improvements, or join our community of contributors.
        </li>
      </ul>
    </div>
  )
}

export default Welcome
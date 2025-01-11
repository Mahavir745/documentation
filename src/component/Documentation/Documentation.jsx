import React, { useContext, useEffect, useState } from 'react'
import { SiDatabricks, SiHtmlacademy, SiNodedotjs } from 'react-icons/si';
import Information from './Information';



const Documentation = () => {
  const [popupMessage, setPopupMessage] = useState(true);
 
  const handlePopupMessage = (e) => {
    let docName = e.target.id
    localStorage.setItem("documentation", docName)
    if (popupMessage) {
      setPopupMessage(false)
    } else {
      setPopupMessage(true)
    }
  }

  return (
    <div className={`mt-20 w-1/2 h-[680px] m-auto flex flex-col items-center relative ${!popupMessage ? "mb-[300px]":"mb-0"}`}>
      <h1 className='text-2xl mb-5 shadow-sm shadow-white inline-block p-4 rounded-md bg-white text-gray-600 font-semibold'>Documentation Overview</h1>
      <p className='text-center mb-8'>Explore comprehensive guides and resources tailored to help you master every aspect of your project. Our documentation is divided into three key sections to address your needs:</p>
      <div className=' w-[900px] flex justify-around flex-wrap'>
        {popupMessage ? <div className='w-[400px] bg-gray-200 text-gray-700 font-semibold cursor-pointer flex gap-4 shadow-md shadow-white items-center p-2 rounded-md mt-4 hover:bg-white'>
          <SiHtmlacademy className='text-8xl flex-shrink-0' />
          <p className='text-[14px]'>Frontend – Learn how to create engaging and user-friendly interfaces. <button onClick={(e) => handlePopupMessage(e)} id='frontend' className='bg-blue-700 p-1 text-white rounded-md'>View More</button></p>
        </div> : <Information  setPopupMessage={setPopupMessage}/>}

        {popupMessage ? <div className='w-[400px] bg-gray-200 text-gray-700 font-semibold cursor-pointer flex gap-4 shadow-md shadow-white items-center p-2 rounded-md mt-4 hover:bg-white' onClick={(e) => handlePopupMessage(e)} id='backend'>
          <SiNodedotjs className='text-8xl flex-shrink-0' />
          <p className='text-[14px]'>Backend – Dive into server-side logic and build robust, scalable systems.<button onClick={(e) => handlePopupMessage(e)} id='backend' className='bg-blue-700 p-1 text-white rounded-md'>View More</button></p>
        </div> : <Information  setPopupMessage={setPopupMessage}/>}

        {popupMessage ? <div className='w-[400px] bg-gray-200 text-gray-700 font-semibold cursor-pointer flex gap-4 shadow-md shadow-white items-center p-2 rounded-md mt-4 hover:bg-white' onClick={(e) => handlePopupMessage(e)} id='dataAnalysis' >
          <SiDatabricks className='text-8xl flex-shrink-0' />
          <p className='text-[14px]'>Data Analytics – Unlock the power of data with insights and analysis techniques.<br/><button onClick={(e) => handlePopupMessage(e)} id='dataAnalysis' className='bg-blue-700 p-1 text-white rounded-md'>View More</button></p>
        </div> : <Information setPopupMessage={setPopupMessage}/>}
      </div>
    </div>

  )
}

export default Documentation

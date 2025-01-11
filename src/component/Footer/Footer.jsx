import React from 'react'
import { PiCopyrightBold } from "react-icons/pi";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <div className='text-white bg-gray-900 w-full h-40'>
      <ul className=' w-[300px] h-24 m-auto text-[13px] flex justify-between p-4'>
       <div>
       <Link href=""><li>Documentation</li></Link>
        <Link href=""><li>Important Link</li></Link>
        <Link href=""><li>Updates</li></Link>
        <Link href=""><li>Set up</li></Link>
       </div>
       <div>
       <Link href=""><li>Policy</li></Link>
        <Link href=""><li>Helpline</li></Link>
        <Link href=""><li>Security</li></Link>
       </div>
      </ul>
      <p className='flex gap-1 items-center justify-center text-[14px] p-2'><PiCopyrightBold className='text-xl'/><span>Copyrighit All Information has been reserved by Mveer745</span></p>
      </div>
    </div>
  )
}

export default Footer
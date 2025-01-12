import React from 'react'
import { ImHome, ImHome3, ImReply } from "react-icons/im";
import { TbLogin2, TbSchool } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import hyperverglogo from "../../assets/hyperverge-logo.webp"


const Header = () => {
  return (
    <div>
      <div className='bg-gray-900 text-white w-full h-43 flex items-center justify-around p-4'>
        <p className='text-4xl p-2 flex border items-center gap-2 bg-sky-50 rounded-md'><img src={`${hyperverglogo}`} className='w-40 h-28 bg-white rounded-md shadow-lg'/> <span className='flex text-gray-500 font-extrabold'>Academy <TbSchool/></span> </p>
        <ul className='flex gap-4'>
          <NavLink to="/" className={({isActive})=>`${isActive ? "text-white bg-gray-600 ":"bg-white text-gray-800 "}rounded-md p-2 font-medium`}><li className='flex gap-1 items-center justify-center'><span>Home</span> <ImHome/></li></NavLink>
          <NavLink to="/login" className={({isActive})=>`${isActive ? "text-white bg-gray-600 ":"bg-white text-gray-800 "}rounded-md p-2 font-medium`}><li className='flex gap-1 items-center justify-center'><span>Login</span><TbLogin2/></li></NavLink>
          <NavLink to="/register" className={({isActive})=>`${isActive ? "text-white bg-gray-600 ":"bg-white text-gray-800 "}rounded-md p-2 font-medium`}><li className='flex gap-1 items-center justify-center'><span>Register</span><ImReply/></li></NavLink>
        </ul>
      </div>

    </div>
  )
}

export default Header
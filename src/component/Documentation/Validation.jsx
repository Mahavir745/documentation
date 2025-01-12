import React, { useContext, useRef } from 'react'
import { RiChatSmile2Fill } from "react-icons/ri";
import { dataProvider } from '../../store/AllDataStore';



const Validation = () => {
 const {verifyUser} =  useContext(dataProvider);
  const hvaElement = useRef();
  const emailElement = useRef();
  let documentation = localStorage.getItem("documentation")

  const HandleValidation = (e)=>{
    e.preventDefault();
    const hvaId = hvaElement.current.value;
    const emailId = emailElement.current.value;
    const batch = documentation
    verifyUser(batch,hvaId,emailId);
  } 

  return (
    <form onSubmit={(e)=>HandleValidation(e)}>
      <p className='text-[12px] bg-pink-600 shadow-md border rounded-md p-2 text-white font-semibold'>
        <span>Your Curriculum is Ready! </span>
        <span> We’re excited to have you on board. To access the curriculum and start your learning journey, please provide the following details:</span>
      </p>
      <div className='flex rounded-md shadow-md border items-center'>
        <div className='border border-white w-[20%]  h-[100px] p-3'>
          <label htmlFor="hvaId" className='block text-gray-600 font-semibold mb-2'>HVA Id:<span className='text-red-700'>*</span></label>
          <input type="number" placeholder='Registered HVA id:' className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-gray-300 text-[14px]' ref={hvaElement} id='hvaId'/>
        </div>
        <div className='border border-white w-[50%]  h-[100px] p-3'>
          <label htmlFor="email" className='block text-gray-600 font-semibold mb-2'>Email Id:<span className='text-red-700'>*</span></label>
          <input type="email" placeholder='Registered email id:' className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-gray-300 text-[14px]' ref={emailElement} id='email'/>
        </div>
        <div className='w-[20%]'>
          <RiChatSmile2Fill className='text-2xl text-pink-700' />
          <button type="submit" className='bg-indigo-700 text-white p-2 w-[100%] rounded-md'>Verify</button>
        </div>
      </div>
    </form>
  )
}

export default Validation
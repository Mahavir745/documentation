import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const EmailElement = useRef();
  const PasswordElement = useRef();
  const navigate = useNavigate();


  const HandleSubmitForm = (e) => {
    e.preventDefault();
    const email = EmailElement.current.value;
    const password = PasswordElement.current.value;

    EmailElement.current.value = "";
    PasswordElement.current.value = "";
  }
  return (
    <div className='w-[100%] h-[500px] flex items-center'>
      <form className='w-[600px] h-auto p-2 m-auto border border-gray-600 rounded-md  shadow-md shadow-gray-500 flex flex-col  gap-3 justify-between' onSubmit={(e) => HandleSubmitForm(e)}>
        <div>
          <h1 className='text-white bg-gray-800 p-2 rounded-md font-medium text-2xl'>Login Your Profile</h1>
        </div>
        <div className='border border-white w-auto h-[100px] p-3'>
          <label htmlFor="" className='block text-gray-600 mb-2'>Email Id:<span className='text-red-700'>*</span></label>
          <input type="email" placeholder='Registered Email id:' ref={EmailElement} className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-gray-300 text-[14px]' />
        </div>
        <div className='border border-white w-auto h-[100px] p-3'>
          <label htmlFor="" className='block text-gray-600 mb-2'>Password: <span className='text-red-700'>*</span></label>
          <input type="password" placeholder="Enter your password" ref={PasswordElement} className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-gray-300 text-[14px]' />
        </div>
        <div>
          <button type="submit" className='bg-gray-900 text-white p-2 w-[100%] rounded-md'>Login</button>
          <p className='text-[14px] p-2'>Don't have an account: <Link to="/register" className='text-blue-800 font-medium'>Register Here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
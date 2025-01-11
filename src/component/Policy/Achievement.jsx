import React from 'react'
import { SiAdguard } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Achievement = () => {
  return (
    <div className=' w-1/2 h-[800px] m-auto'>
      <h1 className='text-4xl font-semibold text-white rounded-md p-2 flex items-center gap-4'><span>Achievements Policy</span> <SiAdguard /></h1>
      <p className='text-xl mb-4 text-center mt-4'>Earn points as you explore, learn, and contribute—your journey, your rewards!"</p>
      <div className='flex items-center justify-between'>
        <div className='w-[300px] h-[300px] bg-gray-600 flex flex-col items-center justify-center gap-2 rounded-md shadow-md shadow-white'>
          <p className='text-8xl'>50 + </p>
          <p className='text-2xl'>Practice Projects</p>
        </div>
        <ul className='w-[600px] text-[14px]'>
          <li className='bg-slate-100 text-gray-900 p-4 mb-2 rounded-md font-semibold'>Task Completion: Earn points for every completed task or module. The more you complete, the more you earn!</li>
          <li className='bg-slate-600 text-gray-100 p-4 mb-2 rounded-md font-semibold'>Timely Submission: Bonus points for completing tasks before the deadline to encourage consistent progress.</li>
          <li className='bg-slate-100 text-gray-900 p-4 mb-2 rounded-md font-semibold'>Quality of Work: Gain additional points for exceptional submissions that go beyond basic requirements.</li>
        </ul>
      </div>
      <Link to={"/login"}><p className='bg-gray-300 p-2 text-center text-gray-900 font-semibold mt-4 rounded-md cursor-pointer hover:bg-white'>Start Your Journey</p></Link>
    </div>
  )
}

export default Achievement
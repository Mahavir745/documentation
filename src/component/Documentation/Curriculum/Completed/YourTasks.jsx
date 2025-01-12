import React, { useContext, useState } from 'react'
import { dataProvider } from '../../../../store/AllDataStore'

const YourTasks = () => {
  const {submitAnswer} = useContext(dataProvider)
  console.log(submitAnswer)
  return (
    <div className='w-1/2 m-auto mt-4 mb-4 '>
      <h1 className='text-4xl font-semibold mb-4 bg-pink-400 rounded-md shadow-md shadow-black text-center text-white p-2 fontdesign '>Ready For Your Tasks:</h1>
      <div className='flex flex-col gap-4 '>
          
      </div>
    </div>
  )
}

export default YourTasks
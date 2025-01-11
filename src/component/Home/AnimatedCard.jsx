import React from 'react'

const AnimatedCard = () => {
  return (
    <div className='w-[900px] p-6  h-[700px] flex items-center justify-center gap-4 relative'>
      <div className='h-[80%] w-[50%] rounded-md shadow-md shadow-white border overflow-hidden animation3'>
      </div>
      <div className='h-[60%] w-[50%] rounded-md shadow-md shadow-white border overflow-hidden absolute animation1'>
      </div>
      <div className='h-[80%] w-[50%] rounded-md shadow-md shadow-white border overflow-hidden animation2'>
      </div>
    </div>
  )
}

export default AnimatedCard
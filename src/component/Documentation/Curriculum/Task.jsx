import React from 'react'
import TaskList from './TaskList'

const Task = ({data}) => {
 
  return (
    <details  className='bg-gray-200 p-4 rounded-md shadow-md shadow-black'>
      <summary className='text-xl font-bold text-white bg-gray-900 p-2 cursor-pointer'>{data.title}</summary>
      <ul className='font-bold p-2 bg-white'>
        {data.data.map((item,index) => <TaskList item={item} key={index}/>)}
      </ul>
    </details>
  )
}

export default Task
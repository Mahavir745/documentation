import React from 'react'

const TaskList = ({item,completed}) => {
  return (
        <details  className='bg-gray-300 p-4 rounded-md mb-4 '>
          <summary className={`text-xl font-bold text-white  p-2 cursor-pointer ${completed ? "bg-gradient-to-r to-green-700 from-green-400" : "bg-gradient-to-r to-pink-200 from-blue-400"}`}>{item.summary}</summary>
          <ul className='font-bold p-2 bg-white listSyle'>
            {item.tasklist.map(item => <li className='bg-slate-300 mb-2 p-2 text-blue-950 rounded-md' key={item}> {item} </li>)}
          </ul>
        </details>
  )
}

export default TaskList
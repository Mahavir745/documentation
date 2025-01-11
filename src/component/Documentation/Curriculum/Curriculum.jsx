import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'
import { dataProvider } from '../../../store/AllDataStore'

const Curriculum = () => {
  const {AllCurriculum} = useContext(dataProvider);
  const [founddoc,setFoundDoc] = useState([]);

  const documentation = localStorage.getItem("documentation")

  useEffect(()=>{
    const data = AllCurriculum.filter((item)=> {
      if(item.name === documentation){
        return item.curriculum
      }
    });
    if(data){
      setFoundDoc(data);
    }
  },[documentation])

  const Array = founddoc[0]?.curriculum || []


  return (
    <div>
      <div className='w-1/2 m-auto mt-4 mb-4'>
        <h1 className='text-4xl font-semibold mb-4 bg-sky-700 rounded-md shadow-md shadow-black text-center text-white p-2 fontdesign'>{documentation} Curriculum</h1>
        <div className='flex flex-col gap-4 '>
          {Array?.map((item)=> <Task data={item} key={item.title}/>)||[]}
        </div>
      </div>
    </div>
  )
}

export default Curriculum
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'
import { dataProvider } from '../../../store/AllDataStore'

import CompletedQuestions from './Completed/CompletedQuestions';
import YourTasks from './Completed/YourTasks';

const Curriculum = () => {
  const {AllCurriculum,completedTrigger,setCompletedTrigger,submitTrigger} = useContext(dataProvider);
  const [founddoc,setFoundDoc] = useState([]);
  const [foundtaskTitle ,setFoundtaskTitile] = useState()

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
  // console.log(Array)
  

  return (
    <div className='flex p-4 gap-2 relative min-h-[600px]'>
      <div className='w-4/12 m-auto mt-4 mb-4'>
        <h1 className='text-4xl font-semibold mb-4 bg-sky-700 rounded-md shadow-md shadow-black text-center text-white p-2 fontdesign'>{documentation} Curriculum</h1>
        <div className='flex flex-col gap-4 '>
          {Array?.map((item)=> <Task data={item} key={item.title} setCompletedTrigger={setCompletedTrigger} setFoundtaskTitile={setFoundtaskTitile} completedTrigger={completedTrigger}/>)||[]}
        </div>
        {completedTrigger && <CompletedQuestions setCompletedTrigger={setCompletedTrigger} data={Array} foundtaskTitle={foundtaskTitle}/> }
      </div >
      {submitTrigger && <YourTasks/>}
    </div>
  )
}

export default Curriculum
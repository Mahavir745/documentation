import React from 'react'

const ListCompleted = ({question,Qno,answerElement}) => {
  return (
    <div>
      <label htmlFor="Question 1" className='block text-gray-600 font-bold' >Q.{Qno + 1}: {question} <span className='text-red-600'>*</span></label>
      <textarea name="question1" id="Question1" className='resize-none p-2 text-gray-500 border w-full h-20 text-[14px] font-bold mt-2 ' placeholder='Your Answer:' ref={answerElement}/>
    </div>
  )
}

export default ListCompleted
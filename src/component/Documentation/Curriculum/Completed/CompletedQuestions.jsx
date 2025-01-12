import React, { useContext, useEffect, useRef, useState } from 'react'
import ListCompleted from './ListCompleted'
import { RiDeleteBin3Fill, RiStarSmileFill } from 'react-icons/ri'
import { dataProvider } from '../../../../store/AllDataStore';


const CompletedQuestions = ({ setCompletedTrigger, data, foundtaskTitle }) => {

  const [question, setQuestion] = useState([]);
  const { addYourAnswers, setSubmitTrigger } = useContext(dataProvider);
  const documentation = localStorage.getItem("documentation")
  const answerElement = useRef([]);

  const HandleDelete = () => {
    setCompletedTrigger(false)
  }

  useEffect(() => {
    const newdata = data.filter((item) => item.title === foundtaskTitle)
    if (newdata.length) {
      setQuestion(newdata)
    }
  }, [foundtaskTitle])


  const HandleSubmitForm = (e) => {
    e.preventDefault();
    const answers = answerElement.current.map(ref => ref?.value || "");
    const validations = answers.every(item => item !== "")

    if (validations) {
      const data = {
        batch: documentation,
        taskTitle: foundtaskTitle,
        submitAnswers: answers
      }
      addYourAnswers(data)
      setSubmitTrigger(true)
      setCompletedTrigger(false)
    }
  }

  // console.log(foundtaskTitle)
  const newQuestions = question[0]?.completedTest || []
  // console.log(newQuestions)

  return (
    <div className='w-1/2 p-6 shadow-md shadow-black absolute left-[500px] top-0 bg-white bg-opacity-90'>
      <form action="" className=' border p-4 w-[700px]  bg-white m-auto mt-2 relative' onSubmit={(e) => HandleSubmitForm(e)}>
        <RiDeleteBin3Fill className='absolute right-4 text-2xl text-red-600 cursor-pointer' onClick={HandleDelete} />
        <h1 className='text-pink-700 font-semibold text-center mb-2'>Answer The Following Questions</h1>
        <p className=' text-[12px] font-bold flex justify-center items-center'>To Active your {foundtaskTitle} tasks <RiStarSmileFill className='text-orange-600 text-xl' /></p>
        {newQuestions.map((item, index) => <ListCompleted
          key={item}
          question={item}
          Qno={index}
          answerElement={(ele) => (answerElement.current[index] = ele)} />)}
        <button type='submit' className='w-full p-2 bg-blue-600 rounded-md text-white font-semibold'>Submit</button>
      </form>
    </div>
  )
}

export default CompletedQuestions



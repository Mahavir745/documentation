import React, { useContext, useEffect, useState } from "react";
import TaskList from "./TaskList";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { dataProvider } from "../../../store/AllDataStore";


const Task = ({ data, setCompletedTrigger, setFoundtaskTitile }) => {
  const [completed, setCompleted] = useState(false);
  const { submitTrigger } = useContext(dataProvider)

  const handleMarkComplete = (e) => {
    const title = e.currentTarget.id;
    setFoundtaskTitile(title)
    setCompletedTrigger(true)
    setCompleted(true)
  };



  return (
    <>
      <details className="bg-gray-200 p-4 rounded-md shadow-md shadow-black ">
        <summary
          className={`text-xl font-bold text-white p-2 relative cursor-pointer ${completed ? "bg-green-600" : "bg-gray-900"
            }`}>
          {data.title}

        <button
            onClick={handleMarkComplete}
            id={`${data.title}`}
            className="text-white font-semibold m-auto text-4xl absolute top-1 right-0 mr-6"
            title="mark as completed"
          >
            <IoCheckmarkDoneCircle />
          </button>

        </summary>
        <ul className="font-bold p-2 bg-white">
          {data.data.map((item, index) => (
            <TaskList item={item} key={index} completed={completed} />
          ))}
        </ul>
      </details>
    </>

  );
};

export default Task;

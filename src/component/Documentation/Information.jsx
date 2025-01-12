import React, { useContext, useEffect, useState } from 'react'
import { MdSummarize } from "react-icons/md";
import { FaHandPointLeft } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import { dataProvider } from '../../store/AllDataStore';
import List from './List';
import { useNavigate, useParams } from 'react-router-dom';
import Validation from './Validation';
import Loading from './Curriculum/Loading';
const Information = ({ setPopupMessage }) => {

  const { Overview } = useContext(dataProvider)
  const [data, setData] = useState()

  let documentation = localStorage.getItem("documentation")
  // todo: For documentation.
  useEffect(() => {
    const newdata = Overview.filter((item) => item.name === documentation)
    if (newdata.length > 0) {
      setData(newdata[0])
    }
  }, [documentation])

  return (
    <div>
      <div className='bg-white w-full text-gray-800 p-4 rounded-md absolute top-40 left-0'>
        <TbXboxXFilled onClick={() => setPopupMessage(true)} className='text-4xl absolute right-0 top-0 text-red-700 cursor-pointer' />
        <h1 className='text-2xl font-semibold flex items-center gap-4'><span className='fontdesign'>Summary: {data?.name || "Loading..."}</span><MdSummarize className='text-4xl text-sky-700' /> </h1>
        <p className='font-bold mb-4'>{data?.about || "Loading..."}</p>
        <ul className='bg-gray-500 text-white flex flex-col items-center justify-center p-2 rounded-sm'>
          {data?.points.map((item) => <List key={item} item={item} />) || "Loading..."}
        </ul>
        <p className='font-bold text-blue-900'>{data?.summary || "Loading..."} </p>
        <p className='text-[12px] font-bold mb-3'>Ready to kickstart your journey in frontend development? <span>Click the link below to explore the Frontend Curriculum and start building amazing user interfaces today!</span></p>
        <Loading/>
      </div>
    </div>
  )
}

export default Information
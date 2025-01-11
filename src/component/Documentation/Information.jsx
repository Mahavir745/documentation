import React, { useContext, useEffect, useState } from 'react'
import { MdSummarize } from "react-icons/md";
import { FaHandPointLeft } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import { dataProvider } from '../../store/AllDataStore';
import List from './List';
import { useNavigate, useParams } from 'react-router-dom';
import Validation from './Validation';
import { defaultVerifyUser } from '../../store/AllDataStore';
const Information = ({ setPopupMessage }) => {

  const { Overview, validationData } = useContext(dataProvider)
  const navigate = useNavigate();
  const [data, setData] = useState()
  let { part } = useParams();
  const [studentVerify, setstudentVerify] = useState();


  let documentation = localStorage.getItem("documentation")

  useEffect(() => {
    const newdata = Overview.filter((item) => item.name === documentation)
    if (newdata.length > 0) {
      setData(newdata[0])
    }
  }, [documentation])

  const HandleNavigate = () => {
    part = documentation
    navigate(`/documentation/${part}`);
  };


  if (validationData) {
    useEffect(() => {
      let data = defaultVerifyUser.filter(user => {
        if (user.batch === documentation && user.email === validationData.emailId && user.hvaId === validationData.hvaId) {
          console.log("found")
          return user;
        }
      });
      if (data.length > 0) {
        setstudentVerify(true);
      }
      else{
        setstudentVerify(false)
      }
    }, [validationData])
  }




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
        {/* <div className='flex items-center gap-2'>
          <button onClick={HandleNavigate} className='text-[14px] border border-fuchsia-700 text-fuchsia-800 bg-slate-300 p-2 rounded-md font-semibold hover:bg-slate-50 hover:border-gray-950 fontdesign'>{data?.name || "Loading..."} Curriculum</button>
          <FaHandPointLeft className='text-fuchsia-600 text-2xl' />
        </div>
        <Validation /> */}

        {studentVerify ? <div className='flex items-center gap-2'>
          <button onClick={HandleNavigate} className='text-[14px] border border-fuchsia-700 text-fuchsia-800 bg-slate-300 p-2 rounded-md font-semibold hover:bg-slate-50 hover:border-gray-950 fontdesign'>{data?.name || "Loading..."} Curriculum</button>
          <FaHandPointLeft className='text-fuchsia-600 text-2xl' />
        </div> : <Validation studentVerify={studentVerify}/>
        }

      </div>
    </div>
  )
}

export default Information
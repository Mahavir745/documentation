import React, { useContext, useEffect, useState } from 'react'
import { dataProvider, defaultVerifyUser } from '../../../store/AllDataStore';
import { useNavigate, useParams } from 'react-router-dom';
import Validation from '../Validation';
import { FaHandPointLeft } from 'react-icons/fa6';

const Loading = () => {
  const [studentVerify, setstudentVerify] = useState(false);
  const { validationData } = useContext(dataProvider)
  const navigate = useNavigate();
  let { part } = useParams();

  let documentation = localStorage.getItem("documentation")

  useEffect(() => {
    let data;
      data = defaultVerifyUser.filter(user => {
        if (user.batch === documentation && user.email === validationData.emailId && user.hvaId === validationData.hvaId) {
          return user;
        }
      });
    if (data.length > 0) {
      setstudentVerify(true);
    }
  }, [validationData])

  const HandleNavigate = () => {
    part = documentation
    navigate(`/documentation/${part}`);
  };

  return (
    <>
      {!studentVerify ? <div className='text-red-700 font-semibold fontdesign'>{documentation} Not Verified Yet...</div> : <div className='text-green-600 font-semibold fontdesign'>{documentation} Verified!</div>}
      {studentVerify ? <div className='flex items-center gap-2'>
        <button onClick={HandleNavigate} className='text-[14px] border border-fuchsia-700 text-fuchsia-800 bg-slate-300 p-2 rounded-md font-semibold hover:bg-slate-50 hover:border-gray-950 fontdesign'>{documentation} Curriculum</button>
        <FaHandPointLeft className='text-fuchsia-600 text-2xl' />
      </div> : <Validation/>
      }

    </>
  )
}

export default Loading
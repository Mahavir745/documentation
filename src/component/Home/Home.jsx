import React from 'react'
import AnimatedCard from './AnimatedCard';
import Welcome from './Welcome';
import Documentation from '../Documentation/Documentation';
import Achievement from '../Policy/Achievement';
import Curriculum from '../Documentation/Curriculum/Curriculum';

const Home = () => {
  return (
    <div className=' text-white bg-gray-950 '>
      <div className='flex justify-evenly leading-9 p-2'>
        <Welcome />
        <AnimatedCard />
      </div>
      <Documentation />
      <Achievement />
      {/* <Curriculum/> */}
    </div>
  )
}

export default Home
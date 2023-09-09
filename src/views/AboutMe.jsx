import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import myprofile from '../assets/contents/mefr.png'

export default function AboutMe() {
  return (
    <div className='p-3 md:p-6'>
      <h1 className='text-center text-teal-400 text-base md:text-lg'>
        <Typewriter
          words={[`Hello There...`]}
          cursor
          cursorStyle='_'
          typeSpeed={40}
        />
      </h1>
      <div className='md:grid md:grid-cols-2 md:mt-8'>
        <div className='flex justify-center mt-3 md:mt-6 md:col-span-1'>
          <img src={myprofile} className=' w-36 md:w-72 border-4 border-teal-400 rounded-md' />
        </div>
        <div className='text-left mt-4 md:mt-10 text-white'>
          <h1 className='mt-1 md:mt-3'>I'm a technology enthusiast with an interest in programming.</h1>
          <h1 className='mt-1 md:mt-3'>I embarked on my career as a programmer, specifically as a web developer,</h1>
          <h1 className='mt-1 md:mt-3'>by successfully completing the Hacktiv8 bootcamp as a full-stack developer.</h1>
          <h1 className='mt-1 md:mt-3'>I have a hobby of enjoying music, particularly from the idol group JKT48.</h1>
          <h1 className='mt-1 md:mt-3'>At Vocational High School, I learned a bit about IoT.</h1>
        </div>
      </div>
    </div>
  )
}

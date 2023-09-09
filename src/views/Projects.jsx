import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import Cards from '../components/Cards'
import data from '../assets/data/projects.json'

export default function Projects() {
  return (
    <div className='p-3 md:p-6'>
      <div className='my-2 mb-4 md:my-5 md:mb-8 text-center text-teal-400 text-base md:text-lg font-medium'>
        <h1>
          <Typewriter
            words={[`This is a project that I have worked on.`]}
            cursor
            cursorStyle='_'
            typeSpeed={40}
          />
        </h1>
        <h1>
          <Typewriter
            words={[`Also try click it :3`]}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            delaySpeed={2000}
          />
        </h1>
        <h1 className='underline underline-offset-8 text-yellow-200 mt-2 md:mt-4'>
          <Typewriter
            words={[`If you opened the website, I apologize, but there is no data available because the server has not been activated.`]}
            cursor
            cursorStyle='_'
            typeSpeed={20}
          />
        </h1>
      </div>
      <div className='md:grid md:grid-cols-3 md:gap-1'>
        {data.map((data, idx) => {
          return (
            <div className='md:flex md:justify-center' key={idx}>
              <Cards data={data} key={idx} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

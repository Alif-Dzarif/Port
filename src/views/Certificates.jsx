import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import CertiCard from '../components/CertiCard'
import data from '../assets/data/certificates.json'

export default function Certificates() {
  return (
    <div className='p-3 md:p-6'>
      <div className='my-2 mb-4 md:my-5 md:mb-8 text-center text-teal-400 font-medium text-base md:text-lg'>
        <h1>
        <Typewriter
            words={[`This is a certificate that I obtained during my studies.`]}
            cursor
            cursorStyle='_'
            typeSpeed={40}
          />
        </h1>
      </div>
      <div className='md:grid md:grid-cols-3 md:gap-1'>
        {data.map((data, idx) => {
          return (
            <div className='md:flex md:justify-center' key={idx}>
              <CertiCard data={data} key={idx} idx={idx} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

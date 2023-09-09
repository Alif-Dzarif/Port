import React, { useEffect, useState } from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

export default function Home() {
  const [isTypewriterDone, setIsTypewriterDone] = useState(false);
  const [text1Done, setText1Done] = useState(false)
  const [text2Done, setText2Done] = useState(false)
  const [text3Done, setText3Done] = useState(false)

  const [text1] = useTypewriter({
    words: ['Hello There, My Name Is'],
    loop: 1,
    typeSpeed: 40,
  })

  return (
    <div className='p-10 md:p-20 mt-10 md:mt-0'>
      <h1 className='text-lg md:text-2xl text-teal-400 font-serif'>
        {text1}
        <Cursor cursorStyle='_' />
      </h1>
      <h1 className='text-xl md:text-6xl'>
        <Typewriter
          words={[`La Ode Abdul Dzarif`]}
          cursor
          cursorStyle='_'
          typeSpeed={80}
          delaySpeed={2000}
        />
      </h1>
      <h1 className='text-lg mt-4 md:mt-6 md:text-3xl font-serif'>
        I'm a
        <span className='ml-3 text-teal-400'>
          <Typewriter
            words={['Back End Developer', 'Front End Developer', 'Web Developer', 'Mobile Developer','FullStack Developer']}
            cursor
            cursorStyle='_'
            typeSpeed={15}
            deleteSpeed={20}
          />
        </span>

      </h1>
    </div>
  )
}

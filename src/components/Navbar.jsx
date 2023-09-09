import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='p-4 md:p-10'>
      <div className='flex'>
        <div className='w-14 px-0 md:px-7 md:w-28'>
          <div className='text-center'>
            <NavLink to={'/'} className='hover:text-teal-300 text-slate-400'>
              <h1 className='text-3xl md:text-4xl hover:scale-125 active:animate-ping hover:animate-spin'>A</h1>
            </NavLink>
          </div>
          <div className='ml-3 mt-80'>
            <div className='mt-12'>
              <NavLink to={'https://github.com/Alif-Dzarif'} className=' hover:text-teal-300  text-slate-400'>
                <FaGithub className='h-7 w-7 md:h-9 md:w-9 hover:scale-125 active:animate-ping' />
              </NavLink>
            </div>
            <div className='mt-12'>
              <NavLink to={'https://instagram.com/shiro_neko.kun9?igshid=OGQ5ZDc2ODk2ZA=='} className=' hover:text-teal-300  text-slate-400'>
                <FaInstagram className='h-7 w-7 md:h-9 md:w-9 hover:scale-125 active:animate-ping' />
              </NavLink>
            </div>
            <div className='mt-12'>
              <NavLink to={'https://www.linkedin.com/in/la-ode-abdul-dzarif-2b7060287/'} className=' hover:text-teal-300  text-slate-400'>
                <FaLinkedinIn className='h-7 w-7 md:h-9 md:w-9 hover:scale-125 active:animate-ping' />
              </NavLink>
            </div>
            <div className='mt-12'>
              <NavLink to={'mailto:abdulaode9@gmail.com'} className=' hover:text-teal-300  text-slate-400'>
                <FaEnvelope className='h-7 w-7 md:h-9 md:w-9 hover:scale-125 active:animate-ping' />
              </NavLink>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex justify-center md:justify-end'>
            <div className='pt-2 flex justify-between w-64 md:w-96 md:pt-0'>
              <div className='md:mx-3'>
                <NavLink to={'/projects'}>
                  <h2 className='text-md md:text-xl hover:text-teal-300 active:animate-ping hover:scale-125'>Projects</h2>
                </NavLink>
              </div>
              <div className='md:mx-3'>
                <NavLink to={'/certificates'}>
                  <h2 className='text-md md:text-xl hover:text-teal-300 active:animate-ping hover:scale-125'>Certificates</h2>
                </NavLink>
              </div>
              <div className='md:mx-3'>
                <NavLink to={'/aboutme'}>
                  <h2 className='text-md md:text-xl hover:text-teal-300 active:animate-ping hover:scale-125'>About Me</h2>
                </NavLink>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div >
  )
}

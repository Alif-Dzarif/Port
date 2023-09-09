import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Cards({ data }) {
  const [points, setPoints] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (points === 1) setShow(true)
    else setShow(false)
    if (points > 1) setPoints(0)
  }, [points, show])

  return (
    <div
      className={`card w-72 md:w-96 bg-slate-700 my-5 text-white shadow-xl hover:border-2 hover:border-teal-400 active:border-2 cursor-pointer active:border-teal-400 md:col-span-1 ${show ? 'h-auto' : 'h-56'}`}
      onClick={() => {
        setPoints(points + 1)
      }}
    >
      <div className="card-body">
        <h2 className="card-title text-teal-400">{data.title}</h2>
        <div className={` px-2 ${data.type === 'Mobile' ? 'bg-green-700' : 'bg-blue-700'} w-20 rounded-2xl`}>
          <p className='text-center text-sm'>{data.type}</p>
        </div>
        <p className='mb-4'>{data.description}</p>
        {show === true ?
          <div className='flex flex-col'>
            {data.type === 'Website' ?
              <NavLink to={data.deploy} className="btn btn-info my-2 md:text-lg">
                <button>View Web</button>
              </NavLink>
              :
              <NavLink to={data.showcase} className="btn btn-info my-2 md:text-lg">
                <button>View Video Showcase</button>
              </NavLink>
            }
            <NavLink to={data.repos} className="btn btn-success my-2 md:text-lg">
              <button >View Repository</button>
            </NavLink>
          </div>
          :
          null
        }
      </div>
    </div>
  )
}

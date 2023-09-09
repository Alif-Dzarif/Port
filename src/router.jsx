import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Certificates from './views/Certificates'
import AboutMe from './views/AboutMe'

export const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/certificates',
        element: <Certificates />
      },
      {
        path: '/aboutme',
        element: <AboutMe />
      }
    ]
  }
])

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'


const router = createBrowserRouter([
     {
        path : "/",
        element : <App/>,
        children : [
           {
              path : "/",
              element : <Home/>
           },
           {
              path : "/about",
              element : <About/>
           },
           {
              path : "/skills",
              element : <Skills/>
           },
           {
              path : "/projects",
              element : <Projects/>
           },
        ]
     }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}>
           <App/>
       </RouterProvider>
  </StrictMode>,
)

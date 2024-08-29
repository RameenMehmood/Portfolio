import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import Tech from './Components/Tech.jsx'



const router=createBrowserRouter([
  { path:"/",
    element: <App/>,
    children: [
      {
       path: "/",
       element: (
       <Home /> 
       
      
       )
     },
      
     {
       path: "/projects",
       element: (
         
           <Projects />
         
       )

     } ,
     {
       path: "/contact",
       element: (
         
           <Contact />
         
       )

     } 
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

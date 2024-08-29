import React from 'react'
import { NavLink } from 'react-router-dom'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
const Navbar = () => {

  return (
    <>

      <nav className='nav'>

        <h1 className='name italic'>
        Rameen
         </h1>
        <ul className='nav-items'>
          {/* <a href="/resume.pdf"  download title='Download pdf'> 
            <AiOutlineDownload />
          </a> */}
           
          <a href="https://github.com/RameenMehmood" className='icon' target='_blank' title='https://github.com/RameenMehmood' >
            <DiGithubBadge />
          </a>
          <a href="https://www.linkedin.com/in/rameen-mehmood-454812273/" className='icon' target='_blank' title='https://www.linkedin.com/in/rameen-mehmood-454812273/'>
            <AiFillLinkedin />
          </a>


        </ul>
      </nav>
    </>
  )
}

export default Navbar

import './App.css'
import './responsive.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Tech from './Components/Tech'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {

  return (
    <>


      <div className="relative">
        <div className="absolute"></div>
          <Navbar />
         
           <Home />
          <Tech />
          <Projects />
          <Contact />
        
         
         

      </div>
      




    </>
  )
}

export default App

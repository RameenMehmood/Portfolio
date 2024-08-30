import React from 'react'
import { motion } from "framer-motion"
const Home = () => {

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x:0,
            opacity:1,
            transition:{duration:0.5, delay:delay}
        }
    })
    return (
        <>
            {/* into  */}
            <div className="container c-width">

                <motion.h2
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='large'>Rameen Mahmood</motion.h2>
                <motion.h3
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                 className='medium m-top trans'>Front-End Web Developer</motion.h3>
                <motion.p
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"
                 className='p'>
                As a front-end web developer, I excel in crafting responsive, user-focused web applications with HTML5, CSS3, and modern JavaScript (ES6+). My expertise includes React.js and Redux Toolkit for efficient state management, along with Appwrite for robust backend integration, ensuring seamless and dynamic web experiences.</motion.p>
                <motion.div 
                 variants={container(1.3)}
                 initial="hidden"
                 animate="visible"
                className=" flex-btn m-top ">
                    
                    <a href="/Resume.pdf" title='Download pdf' target='_blank'><button className='btn'>Resume</button> </a>

                </motion.div>
            </div>


        </>
    )
}

export default Home

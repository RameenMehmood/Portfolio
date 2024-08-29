import React from 'react'
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <>
      <div className="container-contact c-width ">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className='font-size text-center'>Get in Touch</motion.h2>
        <div className="flex-contact">
          <motion.p 
           whileInView={{ x: 0, opacity: 1 }}
           initial={{ x: -100, opacity: 0 }}
           transition={{ duration: 1.5 }}
          className='text-contact'> For any work, project inquiries, or collaborations, feel free to reach out to me via email or linkedin: </motion.p>

          <motion.a 
           whileInView={{ x: 0, opacity: 1 }}
           initial={{ x: 100, opacity: 0 }}
           transition={{ duration: 1 }}
          className='website' href="mailto:rameenmehmood3@gmail.com" >rameenmehmood3@gmail.com</motion.a>
          <motion.a 
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          href="https://www.linkedin.com/in/rameen-mehmood-454812273/" target="_blank" className='website' >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </>
  )
}

export default Contact

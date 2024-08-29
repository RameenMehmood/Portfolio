import React from 'react'
import { animate, motion } from "framer-motion"

const Tech = () => {
  const icon=(duration)=>({
    inital:{y:-8},
    animate:{
        y:[8,-8],
        transition:{
          duration: duration,
          ease:"linear",
          repeat:Infinity,
          repeatType:"reverse"

        }
    }
    
  })
  return (
    <>
       
       <div className="container-tech c-widthv">
                <motion.h2
                whileInView={{y:0,opacity:1}}
                initial={{y:-100,opacity:0}}
                transition={{duration:1 }}
                className='font-size text-center'>Technologies</motion.h2>

                <motion.div 
                whileInView={{x:0,opacity:1}}
                initial={{x:-100,opacity:0}}
                transition={{duration:1}}
                className="m-top1 flex-center">
                    <motion.div
                    variants={icon(2.5)}
                    initial="initial"
                    animate="animate"
                     className="b" title='HTML'>
                        <img className='tech' src="/html-5.png" alt="" />
                         </motion.div>
                    <motion.div
                     variants={icon(3)}
                     initial="initial"
                     animate="animate"
                     
                    className=' b' title='CSS' >
                      <img  className='tech' src="/social.png" alt="" />
                     </motion.div>


                    <motion.div 
                     variants={icon(5)}
                     initial="initial"
                     animate="animate"
                     
                    className='b'  title='JavaScript' >
                      <img className='tech' src="/js.png" alt=""/>
                     </motion.div>

                    <motion.div 
                     variants={icon(3)}
                     initial="initial"
                     animate="animate"
                     className='b' title='React' >
                      <img className='tech' src="/physics.png" alt="" />
                     </motion.div>

                    <motion.div
                     variants={icon(2.5)}
                     initial="initial"
                     animate="animate"
                     title='redux toolkit'
                     className='b' >
                      <img  className="tech" src="redux.svg" alt="" />
                     </motion.div>

                    <motion.div
                     variants={icon(5)}
                     initial="initial"
                     animate="animate"
                      title='appwrite'
                      className='b' >
                      <img className='tech' src="logo.svg" alt="" />
                     </motion.div>

                     
                    {/* <motion.img 
                     variants={icon(5)}
                     initial="initial"
                     animate="animate"
                     className='tech' src="logo.svg" alt="" title='appwrite' />
                      */}

                </motion.div>
            </div>
    </>
  )
}

export default Tech

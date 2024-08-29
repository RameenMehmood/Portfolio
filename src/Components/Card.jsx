import React from 'react';
import { motion } from "framer-motion"

const icon=(duration)=>({
  inital:{y:-4},
  animate:{
      y:[4,-4],
      transition:{
        duration: duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"

      }
  }
  
})

const Card = ({ image, video,title, description, features, techStack, websiteLink, codeLink }) => {
  return (
    <div className=" flex-card">
      <motion.div
      whileInView={{x:0,opacity:1}}
      initial={{x:-100,opacity:0}}
      transition={{duration:1 }} 
      >
        {image && (
          <img src={image} alt={title}  className='img'/>

        )}
        {video && (
          <video src={video} className='video' autoPlay loop muted></video>

        )}
   
      </motion.div>
      <motion.div
      whileInView={{x:0,opacity:1}}
      initial={{x:100,opacity:0}}
      transition={{duration:1 }}
      >
        <h4>{title}</h4>
        <p className='desc'> {description}</p>
        <ul>
          {features.map((feature, index) => (
            <li className='li' key={index}><strong>{feature.title}:</strong> 
            <li className='list-style'>{feature.detail}</li></li>
          ))}
        </ul>
        <motion.div 
         whileInView={{ x: 0, opacity: 1 }}
         initial={{ x: 100, opacity: 0 }}
         transition={{ duration: 1 }}
        
        className="m-top">
          {techStack.map((tech, index) => (
            <span key={index} className="stack color">{tech}</span>
          ))}
        </motion.div>
        <motion.div 
         whileInView={{ x: 0, opacity: 1 }}
         initial={{ x: 100, opacity: 0 }}
         transition={{ duration: 1 }}
        className="flex">
         {websiteLink &&   (
          <>
          <motion.a
          variants={icon(1)}
          initial="initial"
          animate="animate"
          
          href={websiteLink} target="_blank" rel="noopener noreferrer" className='website '>View Live</motion.a>
          </>
          )}
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className='website'>Code Repository</a>
         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;

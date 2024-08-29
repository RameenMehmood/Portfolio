import React from 'react';
import Card from './Card'; 
import { motion } from "framer-motion"


const Projects = () => {
  const projects = [
    {
      video: '/blog-video.mp4',
      title: 'Blog Leaf',
      description: 'A Full-Featured Blog Posting Platform',
      features: [
        { title: 'USER AUTHENTICATION', detail: 'Create accounts and manage profiles with secure authentication and database management via Appwrite.' },
        { title: 'RICH TEXT EDITOR', detail: 'Enhanced content editing with TinyMCE API.' },
        { title: 'FORM MANAGEMENT', detail: 'Efficient form handling using React Hook Form.' }
      ],
      techStack: ['React','Redux Toolkit','Appwrite','CSS3',],
      websiteLink: 'https://blog-leaf.vercel.app/',
      codeLink: 'https://github.com/RameenMehmood/Blog-Leaf'
    },
    {
      video: '/spotify-video.mp4',
      title: 'Spotify Clone',
      description: 'Responsive Design and JavaScript-Enabled Song Playback',
      features: [
        { title: 'UI/UX Design & RESPONSIVE DESIGN', detail: 'A  user-friendly interface that adapts to different screen sizes.' },
        { title: 'INTERACTIVE JS FEATURES', detail: 'JavaScript song playback and event handling functions for enhanced user experience.' }
      ],
      techStack: ['HTML', 'CSS3', 'JavaScript'],
      websiteLink: 'http://spotifyclonebyrk.freewebhostmost.com/',
      codeLink: 'https://github.com/RameenMehmood/Spotify-Clone'
    },
    {
      video: '/netflix-video.mp4',
      title: 'Netflix Clone',
      description: 'A replica of Netflix’s cover page, showcasing layout and design.',
      features: [
        { title: 'UI/UX DESIGN & RESPONSIVE DESIGN', detail: 'Creating visually appealing, user-friendly interface that and implementing responsive design principles to ensure compatibility across various devices' }
      
      ],
      techStack: ['HTML5', 'CSS3'],
      
      codeLink: 'https://github.com/RameenMehmood/Netflix-clone'
    }
  ];

  return (
    <div className="container c-width">
      <motion.h2 className="font-size text-center"
       whileInView={{y:0,opacity:1}}
       initial={{y:-100,opacity:0}}
       transition={{duration:1 }}
       >Projects

     
      </motion.h2>
      <div className="cards ">
        {projects.map((project, index) => (
          <Card
            key={index}
            video={project.video}
            title={project.title}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
            websiteLink={project.websiteLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;


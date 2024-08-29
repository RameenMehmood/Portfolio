// import React from 'react'

// const Projects = () => {
//   return (
//     <>
//       <div className="container c-height">
//         <h3 className='font-size text-center'>Projects</h3>
//         <div className="cards ">
//           <div className="card flex-card">
//             <div >
//               <img src="/vite.svg" alt="" />
//             </div>
//             <div className="">
//               <h4> Blog Leaf </h4>
//               <p>A Full-Featured Blog Posting Platform</p>
//               <ul>
//                 <li><strong>USER AUTHENTICATION:</strong> Create accounts and manage profiles with secure authentication and database management via Appwrite.</li>
//                 <li><strong>RICH TEXT EDITOR:</strong> Enhanced content editing with TinyMCE API.</li>
//                 <li><strong>FORM MANAGEMENT:</strong> Efficient and streamlined form handling using React Hook Form.</li>
//               </ul>
//               <div className="m-top">
//                 <span className='b'>react</span>
//                 <span className='b'>react</span>
//                 <span className='b'>react</span>
//               </div>
//               <div className="flex">
//                 <a href="https://your-blog-leaf-live-site.com"  target="_blank">Visit Website</a>
//                 <a href="https://github.com/your-repository-link" target="_blank">Explore the Code</a>
//               </div>
//             </div>
//           </div>
//           <div className="card flex-card">
//             <div >
//               <img src="/vite.svg" alt="" />
//             </div>
//             <div className="">
//               <h4> Spotify Clone </h4>
//               <p>Responsive Design and JavaScript-Enabled Song Playback</p>
//               <ul>
//                 <li><strong> UI/UX Design & RESPONSIVE DESIGN:</strong> A sleek, user-friendly interface that adapts seamlessly to different screen sizes.</li>
//                 <li><strong>INTERACTIVE JS FEATURES:</strong> JavaScript-powered song playback and intuitive navigation to enhance user experience.</li>
//               </ul>
//               <div className="m-top">
//                 <span className='b'>react</span>
//                 <span className='b'>react</span>
//                 <span className='b'>react</span>
//               </div>
//               <div className="flex">
//                 <a href="https://your-blog-leaf-live-site.com"  target="_blank">Visit Website</a>
//                 <a href="https://github.com/your-repository-link" target="_blank">Explore the Code</a>
//               </div>
//             </div>
//           </div>
//           <div className="card flex-card">
//             <div>
//               <img src="/vite.svg" alt="" />
//             </div>
//             <div className="">
//               <h4> Netflix Clone </h4>
//               <p>A replica of Netflix’s cover page, showcasing attention to detail in layout and design, aimed at delivering an engaging user experience.</p>
//               <ul>
//                 <li><strong>UI/UX DESIGN:</strong> Creating visually appealing, user-friendly interfaces that enhance the overall user experience.</li>
//                 <li><strong>RESPONSIVE DESIGN:</strong> Implementing responsive design principles to ensure compatibility across various devices.</li>
//               </ul>
//               <div className="m-top">
//                 <span className='b'>react</span>
//                 <span className='b'>react</span>
//                 <span className='b'>react</span>
//               </div>

//               <div className="flex">
//                 <a href="https://your-blog-leaf-live-site.com" target="_blank">Visit Website</a>
//                 <a href="https://github.com/your-repository-link"  target="_blank">Explore the Code</a>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>
//     </>
//   )
// }

// export default Projects


import React from 'react';
import Card from './Card'; // Make sure to update the import path according to your file structure
import { motion } from "framer-motion"


const Projects = () => {
  const projects = [
    {
      // image:'/blog.jfif',
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
        { title: 'UI/UX DESIGN & RESPONSIVE DESIGN', detail: 'Creating visually appealing, user-friendly interface that and implementing responsive design principles to ensure compatibility across various devices' },
        // { title: 'RESPONSIVE DESIGN', detail: 'Implementing responsive design principles to ensure compatibility across various devices.' }
      ],
      techStack: ['HTML5', 'CSS3'],
      
      codeLink: 'https://github.com/RameenMehmood/Netflix-clone'
    }
  ];

  return (
    <div className="container">
      <motion.h2 className="font-size text-center"
       whileInView={{y:0,opacity:1}}
       initial={{y:-100,opacity:0}}
       transition={{duration:1 }}
       >Projects

     
      </motion.h2>
      <div className="cards c-height">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
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


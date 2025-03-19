import React from 'react'
import Skeleton from './Skeleton'

function Projects() {
  return (
    <div>
      
      <h1 className="mt-1 text-base font-bold pl-4">Project</h1>

      <Skeleton 
      work_title="CHAT APPLICATION"
      work_desc_array = {
        ["Developing a scalable backend using Java, Spring Boot, and WebSockets, with Redis for caching and PostgreSQL for reliable data management.",
          "Building a real-time chat platform with WebSocket integration for instant messaging, optimized for performance during message delivery.",
          "Designing a responsive user interface with React and Tailwind CSS to enable real-time message updates, file sharing, and user specific interactions.",
        ]
      }
      work_Duration = "03/2025 to current"
      />

      <Skeleton 
      work_title="PORTFOLIO WEBSITE"
      work_desc_array = {
        ["Developed a personal portfolio using React and Tailwind CSS for a clean, responsive, and visually engaging UI.",
          "Built backend with Node.js and MongoDB, implemented endpoints to collect user feedback and handle contact requests.",
        ]
      }
      work_Duration = "02/2025 to 03/2025"
      />

      <Skeleton 
      work_title="E-COMMERCE PLATFORM"
      work_desc_array = {
        ["Built with Node.js, Express.js, Mongoose, Redux, Node-mailer, and React.js.",
          "Built RESTful API with 18+ endpoints for user, cart, and product management, supporting two distinct roles (user and admin) with access controls.",
          "Implemented password recovery via Node mailer and used cipher (sha-256) for improved security and user experience."
        ]
      }
      work_Duration = "01/2024 to 03/2024"
      />
    </div>
  )
}

export default Projects
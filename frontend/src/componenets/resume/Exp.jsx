import React from 'react'
import Skeleton from './Skeleton'

function Exp() {
  return (
    <div>
      <h1 className="mt-1 text-base font-bold pl-4">WORK-EXPERIENCE</h1>
      <Skeleton 
      work_title="Oriserve"
      work_desc_array = {
        ["Tools & Technologies: JavaScript (Node.js, Express.js), Mongoose, Socket.io, Redis, Bull, MongoDB, Java. ",
          "Created flexible JavaScript code to meet diverse client needs for chat bots, email bots, WhatsApp bot and voice bot enhancing modularity and maintainability across projects.",
          "Developed structured prompts for GPT-4.0 and GPT-4.0 Mini, improving model response accuracy and relevance","Conducted API testing and debugged issues across multiple client integrations, reducing error rates by 15% and improving bot reliability.",
          "Streamlined voice bot performance by optimizing message processing, reducing latency by 30% for consistent real-time responses regardless of message length. "
        ]
      }
      work_role = "Software developer Intern"
      work_location = "Noida, Up"
      work_Duration = "07/2024 to 03/2025"
      />

      <h1 className="mt-4 text-base font-bold pl-4">ACHIEVEMENTS AND EXTRACURRICULARS</h1>

      <Skeleton 
      work_title="YCC CLUB CO-LEAD"
      work_desc_array = {
        ["Managed 10+ members in a university club, organizing and hosting club fests and events while collaborating with the other team members and leads to enhance performance and deliver high-quality outcomes. ",
        ]
      }
      work_Duration = "Shoolini university/ Solan, HP"
      />

      <Skeleton 
      work_title="BUSINESS CONSULTANT"
      work_desc_array = {
        ["Worked for 20+ client companies, hired for 30+ roles by identifying suitable candidates for both technical and non-technical positions based.",
        ]
      }
      work_Duration = "AVE-Promagne/ Part-time, Wfh"
      />

      <Skeleton 
      work_title="NGO DESIGN COORDINATOR "
      work_desc_array = {
        ["Handled a team of 15+ designers, ensuring timely completion of tasks, including promotional posters and event designs, to support organizational goal.",
        ]
      }
      work_Duration = "Aashman foundation/Part-time, Wfh"
      />
    </div>
  )
}

export default Exp
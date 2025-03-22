import React from 'react'
import './Aboutcss.css'
function Skills() {
  return (
    <>
    <div className="flex flex-wrap flex-row pl-2 overflow-auto">
      <div className="md:w-1/2 w-full">
        <div className="skill-box p-4">
            <span className="title">Java</span>

            <div className="skill-bar">
                <span className="skill-per java">
                    {/* <span className="tooltip">50%</span> */}
                </span>
            </div>
        </div>

        <div className="skill-box p-4">
            <span className="title">Javascript</span>

            <div className="skill-bar">
                <span className="skill-per javascript">
                    {/* <span className="tooltip">70%</span> */}
                </span>
            </div>
        </div>
        <div className="skill-box p-4">
            <span className="title">Python</span>

            <div className="skill-bar">
                <span className="skill-per python">
                    {/* <span className="tooltip">30%</span> */}
                </span>
            </div>
        </div>
        </div>

        <div className="md:w-1/2 w-full">
        <div className="skill-box p-4">
            <span className="title">Mongo-Db</span>

            <div className="skill-bar">
                <span className="skill-per mongo">
                    {/* <span className="tooltip">50%</span> */}
                </span>
            </div>
        </div>

        <div className="skill-box p-4">
            <span className="title">PostgreSQL</span>

            <div className="skill-bar">
                <span className="skill-per postgresql">
                    {/* <span className="tooltip">70%</span> */}
                </span>
            </div>
        </div>
        </div>
    </div>
    <div className="pt-2">
            <h1 className="mb-1 text-base font-bold flex items-start gap-2 pt-4 pl-4">
            Programming: <span className="font-normal text-base">Java, JavaScript, C++, Python.</span>
            </h1>
            <h1 className="mb-1 text-base font-bold flex items-start gap-2 pt-4 pl-4">
            Database: <span className="font-normal text-base">MongoDB, MySQL, PostgreSQL.</span>
            </h1>
            <h1 className="mb-1 text-base font-bold flex items-start gap-2 pt-4 pl-4">
            Core: <span className="font-normal text-base">DSA, Git, Linux, Agile.</span>
            </h1>
            <h1 className="mb-1 text-base font-bold flex items-start gap-2 pt-4 pl-4">
            Frameworks and libraries: <span className="font-normal text-base">Node, SpringBoot, React.</span>
        </h1>
        </div>
        </>
  )
}

export default Skills
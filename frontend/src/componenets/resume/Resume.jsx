import React from 'react'
import Exp from './Exp'
import Projects from './Projects'

function Resume() {
  return (
    <div className='p-4 m-4'>
            <h1 className="mb-5 text-5xl font-bold" id='resume'>Resume</h1>
            <div className="flex md:flex-row flex-col">
            <Exp/>
            <Projects/>
            </div>
    </div>
  )
}

export default Resume
import React from 'react'
import "./Main.css"
import Hero from './hero/Hero'
import Sidebar from './sidebar/Sidebar'
import About from './about/About'
import Resume from './resume/Resume'
import Hobbies from './hobbies/Hobbies'
import Contact from './contact/Contact'

function MainBody() {
  return (
    <div className="flex">
      <div className="lg:block lg:w-0">
        <Sidebar/>
      </div>
      <div className="flex-1 p-0 lg:ml-64">
        <Hero/>
        <About/>
        <Resume/>
        <Hobbies/>
        <Contact/>
      </div>
    </div>
  )
}

export default MainBody
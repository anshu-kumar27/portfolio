import React from 'react'
import Form from './form'
import Me from './Me'
function Contact() {
  return (
    <>
    
    <div className="p-4 m-4" id='contact'>
    <h1 className="mb-5 text-5xl font-bold">Contact</h1>
    <div className="flex md:flex-row flex-col">
      <Me/>
      <Form/>
      </div>
    </div>

    </>
  )
}

export default Contact
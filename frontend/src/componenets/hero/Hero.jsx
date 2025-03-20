import React from 'react'
import herobg from "../../assets/pics/herobg.jpg";
function Hero() {
  return (
    <div
    id='home'
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${herobg})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-left justify-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">ANSHU KUMAR</h1>
      <h1 className="mb-1 text-1xl">I'm a Fullstack Developer</h1>
    </div>
  </div>
</div>
  )
}

export default Hero
import React from 'react'
import { HiCake } from "react-icons/hi2";
import { FcGraduationCap } from "react-icons/fc";
import { LuNotebook } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";


import './Aboutcss.css'
import Skills from './Skills';
function About() {
    return (
        <div className='pt-4 pb-4 mt-4 mb-4 pl-4' id='about'>
            <h1 className="mb-5 text-5xl font-bold ">About</h1>
            <h3 className="mb-3 text-1xl">Once upon a time, I wrote my first ‘Hello, World!’ and never looked back. Now, I build scalable backends, craft sleek frontends, and optimize performance like a digital handyman. Whether it’s designing APIs, managing data, or styling, I turn ideas into smooth, functional experiences. Have a project in mind? Let’s make it happen!</h3>
            <div className="flex flex-wrap flex-row p-4">
                <div className="md:w-1/2 w-full">
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <HiCake size={20} /> Birthday: <span className="font-normal text-base">27th April</span>
                    </h1>
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <MdLocationPin  size={20} /> Location: <span className="font-normal text-base">Noida, UP</span>
                    </h1>
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <FcGraduationCap size={20} /> Education: <span className="font-normal text-base">Bachelors</span>
                    </h1>
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <LuNotebook size={18} /> Field: <span className="font-normal text-base">Computer Science</span>
                    </h1>
                </div>
                <div className="md:w-1/2 w-full">
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <IoTimerOutline size={20} /> Age: <span className="font-normal text-base">22</span>
                    </h1>
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <MdOutlineMailOutline  size={20} /> Email: <span className="font-normal text-base"><a href="mailto:anshukumar3552@gmail.com">anshukumar3552@gmail.com</a></span>
                    </h1>
                    <h1 className="mb-1 text-base font-bold flex items-center gap-2 p-1">
                        <TiTick size={20} /> Freelance: <span className="font-normal text-base">Available</span>
                    </h1>
                </div>
            </div>
            <h1 className="mt-1 text-2xl font-bold pl-5">Skills</h1>
            <Skills/>
        </div>
    )
}

export default About
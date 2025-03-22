import React, { useState, useEffect } from "react";
import Icons from "./icons.jsx";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { TiMail } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";

function Sidebar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Trigger when 60% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="drawer lg:drawer-open fixed top-0 left-0 h-full w-64 max-w-[80vw] z-[100]">
            <label htmlFor="my-drawer-2" className="lg:hidden fixed top-4 right-4 text-3xl cursor-pointer z-100">
                ☰
            </label>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side h-full lg:h-auto">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full">
                    {/* Avatar and Name */}
                    <div className="avatar justify-center w-64 p-2 pt-4 pb-4">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                            <img src="pfp.jpeg" className="rounded-full object-cover grow" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-center font-bold text-lg md-2">Anshu Kumar</h1>
                        <Icons />
                    </div>

                    {/* Navigation Links */}
                    <li className={`text-lg ${activeSection === "home" ? "" : ""}`}>
                        <a href="#home" className="flex items-center w-full">
                            <IoHomeOutline size={20} /> Home
                        </a>
                    </li>
                    <li className={`text-lg ${activeSection === "about" ? "bg-primary text-white" : ""}`}>
                        <a href="#about" className="flex items-center w-full">
                            <HiOutlineUser size={20} /> About
                        </a>
                    </li>
                    <li className={`text-lg ${activeSection === "resume" ? "bg-primary text-white" : ""}`}>
                        <a href="#resume" className="flex items-center w-full">
                            <RiFilePaper2Line size={20} /> Resume
                        </a>
                    </li>
                    <li className={`text-lg ${activeSection === "hobbies" ? "bg-primary text-white" : ""}`}>
                        <a href="#hobbies" className="flex items-center w-full">
                            <AiFillStar size={20} /> Hobbies
                        </a>
                    </li>
                    <li className={`text-lg ${activeSection === "contact" ? "bg-primary text-white" : ""}`}>
                        <a href="#contact" className="flex items-center w-full">
                            <TiMail size={20} /> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

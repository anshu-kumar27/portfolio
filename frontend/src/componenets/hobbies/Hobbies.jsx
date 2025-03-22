import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import hobbiesData from './hobbiesData';

function Hobbies() {
    const [selectedHobby, setSelectedHobby] = useState("Photography"); // Default active tab

    return (
        <div className='p-4 m-4 flex flex-col items-center text-center' id='hobbies'>
            <h1 className="mb-5 text-5xl font-bold">Hobbies</h1>

            {/* Tab Buttons */}
            <div role="tablist" className="tabs tabs-border flex justify-center h-auto">
                {Object.keys(hobbiesData).map((hobby) => (
                    <button 
                        key={hobby} 
                        className={`h-auto m-2 tab px-4 py-2 rounded-lg font-semibold transition-all duration-300 
                            ${selectedHobby === hobby 
                                ? "tab-active border-2 border-primary bg-primary text-white shadow-lg" 
                                : "border border-gray-400 bg-gray-200 text-black dark:bg-gray-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary hover:scale-105"
                            }`}                          
                        onClick={() => setSelectedHobby(hobby)}
                    >
                        {hobby}
                    </button>
                ))}
            </div>

            {/* Images Display with Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <AnimatePresence mode="wait">
                    {hobbiesData[selectedHobby].map((imgSrc, index) => (
                        <motion.img
                            key={imgSrc}
                            src={imgSrc} 
                            alt={selectedHobby}
                            className="w-64 h-80 object-cover rounded-lg shadow-md transition-all duration-300 
                                        sm:filter sm:grayscale sm:hover:grayscale-0 sm:hover:scale-105 sm:hover:brightness-110"
                            initial={{ opacity: 0, y: 20 }} // Start invisible & move up
                            animate={{ opacity: 1, y: 1 }} // Fade in & slide up
                            exit={{ opacity: 0, y: -20 }} // Fade out & slide up
                            transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Hobbies;

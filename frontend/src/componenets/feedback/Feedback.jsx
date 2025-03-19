import React from 'react'
import "./feedbackcss.css"
function Feedback() {
    return (
        <>
           <div className="bg-black border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
      <h1 className="text-center text-slate-200 text-xl font-bold col-span-6">Send Feedback</h1>
      <textarea placeholder="Your feedback..." className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600" defaultValue={""} />


      <span className="col-span-2" />
      <button className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
        <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601" />
        </svg>
      </button>
    </div>
        </>
    )
}


export default Feedback
import React from 'react'
import './Iconscss.css'

function Icons() {
    return (
        <div className="card">
            {/* <!-- Instagram --> */}
            <a href="https://instagram.com/a.kumar0_" className="socialContainer containerOne" target="_blank">
                <svg className="socialSvg instagramSvg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm146.4-49.1c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zM448 152.4v207.2c0 44.6-36.3 80.9-80.9 80.9H80.9C36.3 440.5 0 404.2 0 359.6V152.4C0 107.8 36.3 71.5 80.9 71.5h286.2c44.6 0 80.9 36.3 80.9 80.9z"></path>
                </svg>
            </a>

            {/* <!-- GitHub --> */}
            <a href="https://github.com/anshu-kumar27" className="socialContainer containerTwo" target="_blank">
                <svg className="socialSvg githubSvg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.18 0 .21.15.46.55.38A8.003 8.003 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </a>

            {/* <!-- LinkedIn --> */}
            <a href="https://www.linkedin.com/in/anshu-kumar-63259521b" className="socialContainer containerThree" target="_blank">
                <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
            </a>

            {/* <!-- Email --> */}
            <a href="mailto:anshukumar3552@gmail.com" className="socialContainer containerFour">
                <svg className="socialSvg emailSvg" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-5.803 3.482a1 1 0 0 1-1.034 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z"></path>
                </svg>
            </a>
        </div>

    )

}

export default Icons
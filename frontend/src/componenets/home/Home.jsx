import React from 'react';

function Home() {
  return (
    <div className="navbar bg-base-100 shadow-md"> {/* ✅ Added shadow for visibility */}
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[10] mt-3 w-52 rounded-box bg-white p-2 shadow-lg">
            {/* ✅ Fix: Added 'bg-white' and 'shadow-lg' for visibility */}
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2 bg-gray-100 rounded-md"> {/* ✅ Fixed submenu background */}
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-gray-100 rounded-md"> {/* ✅ Fixed submenu background */}
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn btn-primary">Button</a> {/* ✅ Fixed primary button */}
      </div>
    </div>
  );
}

export default Home;

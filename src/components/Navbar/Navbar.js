import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookReader } from "react-icons/fa";

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 py-5 px-5 sm:px-10 md:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden border-base-300 mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="courses">Courses</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl md:text-4xl sm:text-3xl sm:font-bold font-semibold text-emerald-600 flex items-center">
            <FaBookReader className='text-2xl sm:text-4xl md:text-5xl mr-3'></FaBookReader>
            STUDY BD</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="courses">Courses</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn" to='login'>Log in</Link>
        </div>
      </div>
    );
};

export default Navbar;
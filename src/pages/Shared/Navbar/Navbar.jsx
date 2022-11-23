import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                <Link to='/'>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to='/dashboard' className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
              <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl"><span className="text-3xl">Car</span><h2>some</h2></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn mr-1">Log out</Link>
          <Link className="btn mr-1">Log in</Link>
          <Link className="btn ">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

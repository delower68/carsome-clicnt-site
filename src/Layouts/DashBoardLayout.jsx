import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet/>

        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to='/dashboard'>My Bookings</Link>
            </li>
            <li>
              <Link to='/dashboard/manageBuyer'>Manage Buyer</Link>
            </li>
            <li>
              <Link>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

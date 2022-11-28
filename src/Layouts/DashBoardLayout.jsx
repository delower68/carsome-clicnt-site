import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Navbar from "../pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-6 ml-2">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay rounded-xl"
          ></label>
          <ul className="menu rounded-xl  p-4  w-80 mt-8 text-base-content">
            {user?.type === "Buyer" && (
              <li>
                <Link to="/dashboard" className="mb-2">
                  My Bookings
                </Link>
              </li>
            )}

            { user?.type === 'seller' ||
              <div>
            <li>
              <Link className="mb-2">My Buyers</Link>
            </li>
            <li>
              <Link className="mb-2" to="/dashboard/myProducts">
                My Products
              </Link>
            </li>

            <li>
              <Link className="mb-2" to="/dashboard/addProduct">
                Add a Product
              </Link>
            </li>
            </div>}

            {user?.type !== "admin" || (
              <li>
                <Link to="/dashboard/manageBuyerSeller">
                  Manage Buyer & Seller
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

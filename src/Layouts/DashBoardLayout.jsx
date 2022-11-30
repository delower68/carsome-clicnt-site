import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Spinner from "../pages/Spinner/Spinner";

const DashBoardLayout = () => {

  const url = "http://localhost:8000/users";
  const { data: users = [],refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.data);
      return data;
    },
  });
  
  if(isLoading){
    return <Spinner/>
  }


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
            {users?.type !== "Buyer" && (
              <li>
                <Link to="/dashboard" className="mb-2">
                  My Bookings
                </Link>
              </li>
            )}

            { users?.type !== 'Seller' &&
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

            { users?.type === 'admin' || (
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

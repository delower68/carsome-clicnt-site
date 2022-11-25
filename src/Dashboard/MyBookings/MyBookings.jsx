import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../../pages/Spinner/Spinner";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:8000/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="">
      <h3 className="mt-5 mb-5 text-3xl">My Bookings</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th> Mobile</th>
              <th> Location</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {
            bookings &&
            bookings.map((booking, i) => 
              <tr key={booking?._id}>
                <th>{i + 1}</th>
                <td>{booking?.buyerName}</td>
                <td>{booking?.car_name}</td>
                <td>$ {booking?.resale_price}</td>
                <td>{booking?.mobile}</td>
                <td>{booking?.location}</td>
                <td>
                  {
                    booking?.resale_price && !booking.paid &&
                    <Link to={`/dashboard/payment/${booking._id}`}><button className=" btn btn-primary btn-sm">Pay</button></Link> 
                  }
                  {
                    booking?.resale_price && booking.paid && <span className=" btn-sm btn btn-secondary">paid</span>
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;

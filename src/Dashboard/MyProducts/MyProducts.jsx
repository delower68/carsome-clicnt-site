import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../../pages/Spinner/Spinner";
import ShowMyProducts from "./ShowMyProducts";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://car-some-server.vercel.app/myProducts?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <div className="text-4xl mb-10">My Products</div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Mobile</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((car, i) => (
                <tr key={car._id}>

                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={car.img_url}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{car.car_name}</div>
                          <div className="text-sm opacity-50">
                            Price: ${car.resale_price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {car.categoryName}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {car.location}
                      </span>
                    </td>
                    <td>No: {car.mobile}</td>
                    <th>
                      <button className="btn btn-error btn-xs">DELETE</button>
                    </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;

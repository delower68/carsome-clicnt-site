import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import ShowCars from "./ShowCars";

const AllCars = () => {
  const {
    data: cars = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/products");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className=" justify-center flex flex-col lg:flex-row-reverse ">
        <div className="">
        <ul className="m-3 ">
          <li>
            <Link to='/allMicrobus'><button className="btn mt-4 w-full  rounded dark:bg-gray-800 dark:text-gray-50">Microbus</button></Link>
          </li>
          <li>
            <Link to='/luxuryCar'><button className="btn mt-4 w-full  rounded dark:bg-gray-800 dark:text-gray-50">Luxury car</button></Link>
          </li>
          <li>
            <Link to='/electricCar'><button className="btn mt-4 w-full  rounded dark:bg-gray-800 dark:text-gray-50">Electric car</button></Link>
          </li>
        </ul>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {cars.map((car) => (
          <ShowCars key={car._id} car={car}></ShowCars>
        ))}
      </div>
      
    </div>
  );
};

export default AllCars;

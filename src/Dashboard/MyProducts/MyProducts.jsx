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
      const res = await fetch(`http://localhost:8000/myProducts?email=${user?.email}`);
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
        <div className="text-4xl">My Products</div>
        <div >
          {data.map((car) => (
            <ShowMyProducts key={car._id} data={data}></ShowMyProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;

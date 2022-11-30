import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";

import Spinner from "../../Spinner/Spinner";
import ShowElectricCar from "./ShowElectricCar";

const ElectricCarCategory = () => {
  const [carInfo, setCarinfo] = useState(null);

  const {
    data: electricCar = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["electricCar"],
    queryFn: async () => {
      const res = await fetch("https://car-some-server.vercel.app/electricCar");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {electricCar.map((electric) => (
          <ShowElectricCar
            key={electric._id}
            electric={electric}
            setCarinfo={setCarinfo}
          ></ShowElectricCar>
        ))}
      </div>
      {carInfo && <BookingModal carinfo={carInfo} refetch={refetch} />}
    </div>
  );
};

export default ElectricCarCategory;

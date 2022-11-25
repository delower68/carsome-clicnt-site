import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowElectricCar from './ShowElectricCar';

const ElectricCarCategory = () => {
    const {data: electricCar=[], refetch, isLoading}= useQuery({
        queryKey: ['electricCar'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:8000/electricCar')
            const data= res.json();
            return data;
        }
    })

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {
                electricCar.map(electric => <ShowElectricCar 
                 key={electric._id}
                 electric={electric}
                ></ShowElectricCar>)
            }
        </div>
    );
};

export default ElectricCarCategory;
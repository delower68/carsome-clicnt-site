import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowLuxuryCar from './ShowLuxuryCar';

const LuxuryCarCategory = () => {
    const {data: luxuryCar=[], refetch, isLoading}= useQuery({
        queryKey: ['luxuryCar'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:8000/luxuryCar')
            const data= res.json();
            return data;
        }
    })
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {
                luxuryCar.map(luxury => <ShowLuxuryCar 
                 key={luxury._id}
                 luxury={luxury}
                ></ShowLuxuryCar>)
            }
        </div>
    );
};

export default LuxuryCarCategory;
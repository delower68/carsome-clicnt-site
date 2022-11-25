import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowMicrobus from './ShowMicrobus';

const MicrobusCategorory = () => {

    const {data: microbus=[], refetch, isLoading}= useQuery({
        queryKey: ['microbus'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:8000/microbus')
            const data= res.json();
            return data;
        }
    })
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {
                microbus.map(bus=> <ShowMicrobus
                    key={bus._id}
                    bus={bus}
                ></ShowMicrobus> )
            }
        </div>
    );
};

export default MicrobusCategorory;
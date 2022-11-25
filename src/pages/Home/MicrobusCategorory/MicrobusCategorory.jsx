import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Spinner from '../../Spinner/Spinner';
import ShowMicrobus from './ShowMicrobus';

const MicrobusCategorory = () => {
    const [carInfo, setCarinfo]= useState(null);

    const {data: microbus=[],  isLoading}= useQuery({
        queryKey: ['microbus'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:8000/microbus')
            const data= res.json();
            return data;
        }
    })
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {
                microbus.map(bus=> <ShowMicrobus
                    key={bus._id}
                    bus={bus}
                    setCarinfo={setCarinfo}
                ></ShowMicrobus> )
            }
        </div>
        {   carInfo &&

            <BookingModal 
         carinfo={carInfo}

        />
        }
        </div>
    );
};

export default MicrobusCategorory;
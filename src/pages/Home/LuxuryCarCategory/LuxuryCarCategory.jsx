import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Spinner from '../../Spinner/Spinner';
import ShowLuxuryCar from './ShowLuxuryCar';

const LuxuryCarCategory = () => {
  const [carInfo, setCarinfo]= useState(null);

    const {data: luxuryCar=[],refetch,  isLoading}= useQuery({
        queryKey: ['luxuryCar'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:8000/luxuryCar')
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
                luxuryCar.map(luxury => <ShowLuxuryCar 
                 key={luxury._id}
                 luxury={luxury}
                 setCarinfo={setCarinfo}
                ></ShowLuxuryCar>)
            }
        </div>
        {   carInfo &&
            <BookingModal
                carinfo={carInfo}
                refetch={refetch}
            />
            }
        </div>
    );
};

export default LuxuryCarCategory;
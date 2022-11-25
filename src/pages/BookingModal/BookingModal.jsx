import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ carinfo, refetch }) => {
  const {user}= useContext(AuthContext)
  const navigate = useNavigate();

  const handleBookingModal = e =>{
    e.preventDefault();
    const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const car_name = form.car_name.value;
        const resale_price =form.resale_price.value
        const mobile = form.mobile.value;
        const location = form.location.value;
        // console.log(name, email,resale_price,  car_name, mobile, location);




        const booking = {
          buyerName: name ,
          email,
          car_name,
          resale_price, mobile,
          location
        }
        // console.log(booking);

        fetch('http://localhost:8000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                // setTreatment(null);
                toast.success("Booking confirmed");
                form.reset();
                refetch();
                navigate('/dashboard')
            }
            else{
                toast.error(data.message)
            }
                
        })






  }


  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
          onSubmit={handleBookingModal}
          className="grid grid-cols-1 gap-3 mt-10">

          <h3 name="car_name" className="text-lg font-bold">{carinfo?.car_name}</h3>
            <input
              disabled
              defaultValue={user?.displayName}
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              disabled
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              disabled
              defaultValue={carinfo?.car_name}
              name="car_name"
              type="text"
              placeholder="Car_name"
              className="input w-full input-bordered"
            />
            <input
              disabled
              defaultValue={carinfo?.resale_price}
              name="resale_price"
              type="text"
              placeholder="Resale_price"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <input
              name="mobile"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn   rounded dark:bg-gray-800 dark:text-gray-50"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

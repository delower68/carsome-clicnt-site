import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ carinfo }) => {
  const {user}= useContext(AuthContext)
  console.log(carinfo);


  const handleBookingModal = e =>{
    e.preventDefault();
    const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const car_name = form.car_name.value;
        const resale_price =form.resale_price.value
        const mobile = form.mobile.value;
        const location = form.location.value;
        console.log(name, email,resale_price,  car_name, mobile, location);
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
          <h3 className="text-lg font-bold">{}</h3>
          <form
          onSubmit={handleBookingModal}
          className="grid grid-cols-1 gap-3 mt-10">

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

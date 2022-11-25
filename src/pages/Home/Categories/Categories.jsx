import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {

    

  return (
   <div className="container mx-auto ">
     <div className="grid md:grid-cols-1  gap-3 lg:grid-cols-3 mx-2">
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PL3r1vynT_j5YmMvi3J7c56rgBu0HW5bqA&usqp=CAU" alt="Microbus" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Microbus</h2>
          <p>If you wanna buy a good condition  used microbus , Let's go...!</p>
          <div className="card-actions justify-end">
            <Link to='/allMicrobus'><button className="btn   rounded-lg dark:bg-gray-800 dark:text-gray-50">Microbus</button></Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img src="https://i.ibb.co/sQjZ5yg/download.jpg" alt="luxury car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Luxury car</h2>
          <p>If you wanna buy a excellent condition  used luxury car , Let's go...!</p>
          <div className="card-actions justify-end">
            <Link to='/luxuryCar'><button className="btn   rounded-lg dark:bg-gray-800 dark:text-gray-50">Luxury Car</button></Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.ibb.co/LPMD05v/images.jpg" alt="Electric car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electric car</h2>
          <p>If you wanna buy a excellent condition  used Electric car , Let's go...!</p>
          <div className="card-actions justify-end">
            <Link to='/electricCar'><button className="btn   rounded-lg dark:bg-gray-800 dark:text-gray-50">Electric Car</button></Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Categories;

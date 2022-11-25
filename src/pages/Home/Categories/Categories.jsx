import React from "react";

const Categories = () => {
  return (
   <div className="container mx-auto">
     <div className="grid md:grid-cols-1 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PL3r1vynT_j5YmMvi3J7c56rgBu0HW5bqA&usqp=CAU" alt="Microbus" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Microbus</h2>
          <p>If you wanna buy a good condition  used microbus , Let's go...!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Microbus</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="luxury car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Luxury car</h2>
          <p>If you wanna buy a excellent condition  used luxury car , Let's go...!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Luxury car</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Microbus" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electric car</h2>
          <p>If you wanna buy a excellent condition  used Electric car , Let's go...!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Electric car</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Categories;

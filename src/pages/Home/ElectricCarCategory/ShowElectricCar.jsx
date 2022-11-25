import React from "react";

const ShowElectricCar = ({ electric }) => {
  const {
    img_url,
    car_name,
    condition,
    mobile,
    location,
    seller_name,
    categoryName,
    resale_price,
    original_price,
    purchase_year,
    used_year,
    details,
  } = electric;

  const description = details.slice(0, 200);
  return (
    <div>
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className=" mt-4 card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={img_url} className="h-[200px]" alt="Shoes" />
            </figure>
            <div className="card-body">
              <span>Category: {categoryName}</span>
              <h2 className="card-title">
                {car_name}{" "}
                <div className="badge badge-secondary">
                  Price: ${resale_price}
                </div>
              </h2>
              <div className="flex items-center text-xs">
                <span className="font-bold tracking-wide">{condition}</span>
              </div>
              <p>{description}...</p>
              <div className="flex flex-col space-y-1">
                <div className="mt-6">
                  <p>Seller: {seller_name}</p>
                  <p>Location: {location}</p>
                  <p>Phone: {mobile}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="space-x-2">
                    <p>Purchase: {purchase_year} years</p>
                  </div>
                  <div className="flex space-x-2 text-sm dark:text-gray-400">
                    <div>
                      <p className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                        Real-price: ${original_price}
                      </p>
                      <p>Used: {used_year}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn   rounded dark:bg-gray-800 dark:text-gray-50">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowElectricCar;

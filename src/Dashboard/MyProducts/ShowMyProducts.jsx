import React from "react";

const ShowMyProducts = ({ data }) => {
  const { img_url, car_name, mobile, location, categoryName, resale_price } =
    data[0];

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Mobile</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={img_url} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{car_name}</div>
                    <div className="text-sm opacity-50">
                      Price: ${resale_price}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {categoryName}
                <br />
                <span className="badge badge-ghost badge-sm">{location}</span>
              </td>
              <td>No: {mobile}</td>
              <th>
                <button className="btn btn-error btn-xs">DELETE</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowMyProducts;

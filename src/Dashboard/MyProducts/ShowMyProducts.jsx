import React from "react";

const ShowMyProducts = ({ data }) => {
  const { img_url, car_name, mobile, location, categoryName, resale_price } =
    data[0];

  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{car_name}</div>
              <div className="text-sm opacity-50">Price: ${resale_price}</div>
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
    </div>
  );
};

export default ShowMyProducts;

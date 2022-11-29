import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../pages/Spinner/Spinner";
import ConfirmationModale from "../../pages/Shared/ConfirmationModale/ConfirmationModale";

const ManageBuyer = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);

  const url = "http://localhost:8000/users";
  const { data: users = [],refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:8000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success("Make admin successfully")
            refetch()
        }
      });
  };

  const closeModal = () => {
    setDeleteProduct(null);
  };


  const handleManageBuyerSeller = (user)=>{
    fetch(`http://localhost:8000/users/${user._id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            refetch()
            toast.success("Your  order deleted successfully")
        }
    })
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl text-left mb-4">Manage Buyer & Seller</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Admin </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.type}</td>

                  <td>
                    {user?.type !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs bg-green-400"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>

                  <td>
                    { user?.type !== "admin" &&
                        <label
                        onClick={() => setDeleteProduct(user)}
                      htmlFor="confirmation-modal"
                      className="bg-red-400 btn  btn-sm"
                    >
                      Delete
                    </label>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deleteProduct && (
        <ConfirmationModale
        successButtonName='DELETE'
          successAction={handleManageBuyerSeller}
          modalData={deleteProduct}
          closeModal={closeModal}
          title={`Are you sure you wanna delete? `}
          message={`If you delete ${deleteProduct.name}.  It cann't be undone`}
        />
      )}
      </div>

    </div>
  );
};

export default ManageBuyer;

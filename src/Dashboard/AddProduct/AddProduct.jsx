import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProduct = () => {
    const {user}= useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHost = '068be9ca709d313a4a71654614ff6eea'


const handleAddProduct = data =>{
    const image = data.img_url[0]
    const formData = new FormData();
    formData.append('image', image);
    const url =`https://api.imgbb.com/1/upload?key=${imgHost}`

    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {

      if(imgData.success){


        const product = {
          seller_name: data.seller_name,
          categoryName: data.categoryName,
          details: data.details,
          email:data.email,
          img_url: imgData.data.display_url,
          location: data.location,
          mobile: data.mobile ,
          original_price: data.original_price,
          resale_price: data.resale_price,
          purchase_year: data.purchase_year,
          used_year: data.used_year,
          car_name: data.car_name,
          condition: data.condition
        }

        console.log(product);

        // save the product to the mongodb 
        fetch('http://localhost:8000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.car_name} is added successfully`);
                    
                })



      }
    })


}

  return (
    <div className="">
      <h3 className="text-3xl font-bold text-center">Add a Product</h3>
      {/* form here  */}
     
      <div className="lg:flex justify-center mt-5 ">
      <form onSubmit={handleSubmit(handleAddProduct)} >



        {/* seller name  */}
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
          defaultValue={user?.displayName}
          readOnly
            type="text"
            {...register("seller_name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.seller_name && <p className="text-red-500">{errors.seller_name.message}</p>}
        </div>


            {/* product name  */}

        <div className="form-control w-full max-w-xs ">
          <label className="label">
            {" "}
            <span className="label-text">Product name</span>
          </label>
          <input
            type="text"
            {...register("car_name", {
              required: "Car name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.car_name && <p className="text-red-500">{errors.car_name.message}</p>}
        </div>


        {/* seller email  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* seller  mobile number  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Mobile</span>
          </label>
          <input
            type="number"
            {...register("mobile", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>

        {/* seller  location  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>


        {/* product category  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Category</span>
          </label>
          <select
            {...register("categoryName")}
            className="select input-bordered w-full max-w-xs"
          >
            <option>microbus</option>
            <option>luxuryCar</option>
            <option>electricCar</option>
            
          </select>
        </div>

            {/* product condition  */}
            <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product condition</span>
          </label>
          <select
            {...register("condition")}
            className="select input-bordered w-full max-w-xs"
          >
            <option>Excellent</option>
            <option>Good</option>
            <option>Not bad</option>
            
          </select>
        </div>


        <div className="flex ">
            <div>
            <div className="form-control w-1/2 ">
          <label className="label">
            {" "}
            <span className="label-text">Resale price</span>
          </label>
          <input
            type="number"
            {...register("resale_price", {
              required: true,
            })}
            className="input input-bordered "
          />
          {errors.resale_price && (
            <p className="text-red-500">{errors.resale_price.message}</p>
          )}
        </div>
            </div>
            <div>
                {/* original price  */}
            <div className="form-control w-1/2 ">
          <label className="label">
            {" "}
            <span className="label-text">Original price</span>
          </label>
          <input
            type="number"
            {...register("original_price", {
              required: true,
            })}
            className="input input-bordered  "
          />
          {errors.original_price && (
            <p className="text-red-500">{errors.original_price.message}</p>
          )}
        </div>
            </div>
        </div>

            {/* product purchase year and used year  */}
            <div className="flex ">
            <div>
            <div className="form-control w-1/2 ">
          <label className="label">
            {" "}
            <span className="label-text">Purchase year</span>
          </label>
          <input
            type="number"
            {...register("purchase_year", {
              required: true,
            })}
            className="input input-bordered "
          />
          {errors.purchase_year && (
            <p className="text-red-500">{errors.purchase_year.message}</p>
          )}
        </div>
            </div>
            <div>
                {/* original price  */}
            <div className="form-control w-1/2 ">
          <label className="label">
            {" "}
            <span className="label-text">Used year</span>
          </label>
          <input
            type="number"
            {...register("used_year", {
              required: true,
            })}
            className="input input-bordered  "
          />
          {errors.used_year && (
            <p className="text-red-500">{errors.used_year.message}</p>
          )}
        </div>
            </div>
        </div>

        {/* product img  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product photo</span>
          </label>
          <input
            type="file"
            {...register("img_url", {
              required: "Product photo is Required",
            })}
            className="input  w-full max-w-xs"
          />
          {errors.img_url && <p className="text-red-500">{errors.img_url.message}</p>}
        </div>

        {/* product details  */}
        <label className="label">
            {" "}
            <span className="label-text">Product Details</span>
          </label>
        <textarea 
        {...register("details", {
            required: "Product details is Required",
          })}
        className="textarea textarea-bordered w-3/4" 
        placeholder="Please explain your product details"></textarea>
        <input
          className="btn rounded-lg dark:bg-gray-800 dark:text-gray-50 btn-accent w-3/4 mt-4"
          
          value="Add Product"
          type="submit"
        />
      </form>

      </div>
        
    </div>
  );
};

export default AddProduct;

import React from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <section>
        <div className="dark:bg-light-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-3xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Get A Price On Your Car In Just Minutes. Try Now!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              The Trusted Way To Sell Your Car.
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to="/">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                >
                  Get started
                </button>
              </Link>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/2hsCZ47/Screenshot-3.png"
          alt=""
          className="w-4/6 mx-auto   mb-12 -mt-20  lg:-mt-40 dark:bg-gray-500"
        />
      </section>
      <Categories />

      <div
        className="w-full my-10 dark:bg-gray-500"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find out about promotions and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

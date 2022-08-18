import React from "react";
import { Link } from "react-router-dom";
import logo from "../myhon.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10 sm:h-14" alt="my:hon Logo" />
          </Link>
          <div className="flex md:order-2">
            <Link to="/favorite">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Favorite Hon
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

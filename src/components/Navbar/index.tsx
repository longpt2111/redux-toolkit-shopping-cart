import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-8 w-1/3">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black inline-block text-lg font-semibold active-link relative"
                  : "text-gray-500 hover:text-black inline-block text-lg font-normal relative "
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black inline-block text-lg font-semibold active-link relative "
                  : "text-gray-500 hover:text-black inline-block text-lg font-normal relative "
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black inline-block text-lg font-semibold active-link relative "
                  : "text-gray-500 hover:text-black inline-block text-lg font-normal relative "
              }
              to="/reviews"
            >
              Reviews
            </NavLink>
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl text-blue-500 font-bold text-center">
              Beauty.bd
            </h2>
          </div>
          <div className="w-1/3">
            <div className="flex items-center justify-end">
              <Link
                to="/checkout"
                className="rounded-full relative flex items-center justify-center text-2xl w-10 text-blue-500 cursor-pointer"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

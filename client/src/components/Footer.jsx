import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/">
              <div className="logo-container">
                <img className="w-32 rounded-xl" src="/logo.png" alt="Logo" />
              </div>
            </Link>{" "}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Bus Booking
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
         
            
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm sm:text-center text-white">
            © 2024{" "}
            <a href="https://github.com/kaminsski" className="hover:underline">
              Kanat™
            </a>{" "}
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

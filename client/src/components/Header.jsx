import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoLogIn } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { loadDataAction, logoutAction } from "../redux/actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataAction());
  }, []);

  const { lang } = useSelector((state) => state.lang);
  const { auth } = useSelector((state) => state.auth);

  const [theme, setTheme] = useState("light");

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Location hook to get current URL
  const location = useLocation();

  // Close navbar when navigating to a different page
  useEffect(() => {
    setNav(false);
  }, [location]);
  
  const themeFunc = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };
  const logoutFunc = () => {
    console.log("çalıştı");
    dispatch(logoutAction());
  };

  return (
    <div className="bg-blue-600 dark:bg-black dark:text-white: flex justify-between items-center h-24 px-5 mx-auto text-white">
      {/* Logo */}
      <Link to="/">
        <img className="w-[150px] rounded-full" src="/logo.png" alt="" />
      </Link>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-xl font-bold">
        <Link
          to="/"
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black flex items-center gap-1"
        >
          <IoMdHome />

          {lang ? "Anasayfa" : "Home"}
        </Link>
        <Link
          to="/profile"
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black flex items-center gap-1"
        >
          <CgProfile />

          {lang ? "Profil" : "Profile"}
        </Link>
        {auth === null ? (
          <Link
            to="/register"
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black flex items-center gap-1"
          >
            <IoLogIn />
            {lang ? "Kayıt" : "Register"}
          </Link>
        ) : (
          <Link
            onClick={logoutFunc}
            to="/register"
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black flex items-center gap-1"
          >
            <IoLogIn />
            {lang ? "Çıkış" : "Logout"}
          </Link>
        )}
      </ul>
      <div className=" hidden md:flex gap-5">
        <p>
          {lang ? (
            <img
              onClick={() => dispatch({ type: "LANG", payload: false })}
              className=" rounded-full w-[30px]"
              src="/uk.png"
              alt=""
            />
          ) : (
            <img
              onClick={() => dispatch({ type: "LANG", payload: true })}
              className=" rounded-full w-[30px] h-[30px]"
              src="/tr.png"
              alt=""
            />
          )}
        </p>

        <p>
          {theme === "light" ? (
            <MdDarkMode onClick={themeFunc} size={30} />
          ) : (
            <CiLight onClick={themeFunc} size={30} />
          )}
        </p>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : " w-[60%] ease-in-out fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <img className="w-[150px]" src="/logo.png" alt="" />
        </h1>

        {/* Mobile Navigation Items */}

        <Link to="/" className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex items-center gap-1 text-lg font-bold">
          <IoMdHome />
          {lang ? "Anasayfa" : "Home"}
        </Link>
        <Link to="/profile" className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex items-center gap-1 text-lg font-bold">
          <CgProfile />
          {lang ? "Profil" : "Profile"}
        </Link>
        {auth === null ? <Link to="/register" className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex items-center gap-1 text-lg font-bold">
          <IoLogIn />
          {lang ? "Kayıt ol" : "Register"}
        </Link>: <li             onClick={logoutFunc}
 className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex items-center gap-1 text-lg font-bold">
          <IoLogIn />
          {lang ? "Çıkış" : "Logout"}
        </li>}
       

        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          <p>
            {lang ? (
              <img
                onClick={() => dispatch({ type: "LANG", payload: false })}
                className=" rounded-full w-[30px]"
                src="/uk.png"
                alt=""
              />
            ) : (
              <img
                onClick={() => dispatch({ type: "LANG", payload: true })}
                className=" rounded-full w-[30px] h-[30px]"
                src="/tr.png"
                alt=""
              />
            )}
          </p>
        </li>
        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          <p>
            {theme === "light" ? (
              <MdDarkMode onClick={themeFunc} size={30} />
            ) : (
              <CiLight onClick={themeFunc} size={30} />
            )}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/auth";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaTransgender } from "react-icons/fa";


export default function Register() {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
    gender:""
  });
  const { lang } = useSelector((state) => state.lang);

     const dispatch = useDispatch()

  const onChangeHandle = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
    console.log(authData);
  };
const handleSubmit = () =>{
   dispatch(registerAction(authData))
   
}



  return (
    <>

     <div className="back min-h-screen p-5 flex justify-center"> 
         

          <div className="w-3/4 md:w-1/2 ">
          <h1 className="text-2xl text-white font-bold">{lang ? "Kayıt ol" : "Register"} </h1>
          <form>
          <div className="flex flex-col space-y-3 my-5 relative">
          <FaUser size={20} className="absolute left-1 top-6 text-gray-600"/>
          <MdEmail size={20} className="absolute left-1 top-16 text-gray-600"/>
          <RiLockPasswordFill size={20} className="absolute left-1 top-28 text-gray-600"/>
          <FaTransgender size={20} className="absolute left-1 top-40 text-gray-600"/>

            <input
              value={authData.username}
              name="username"
              onChange={onChangeHandle}
              type="text"
              placeholder={lang ? "Kullanıcı Adı" : "Username"}
              className=" input p-2 pl-8 rounded-lg"
              required
            />

            <input
              value={authData.email}
              name="email"
              onChange={onChangeHandle}
              type="text"
              placeholder="Email"
              className="input p-2 pl-8 rounded-lg"
            />

            <input
              value={authData.password}
              name="password"
              onChange={onChangeHandle}
              type="password"
              placeholder={lang ? "Şifre" : "Password"}
              className="input p-2 pl-8 rounded-lg"
            />
            <select  onChange={onChangeHandle} name="gender" id="gender" className="p-2 pl-8 text-gray-400 rounded-lg">
            <option value="null">Gender</option>
              
              <option value="male">Male</option>

              <option value="female">Female</option>

            </select>
         
          </div>
          </form>
          <div className=" text-blue-200 text-lg font-bold underline cursor-pointer mb-4">
            <Link to="/login">{lang ? "Giriş yap" : "Login"}</Link>
          </div>

          <div
             onClick={handleSubmit} 
            className="cursor-pointer w-full p-2 text-center bg-indigo-400 text-white rounded-md hover:bg-indigo-800 "
          >
            {lang ? "Kayıt ol" : "Register"}
          </div>
          </div>
          </div>
    </>
  );
}

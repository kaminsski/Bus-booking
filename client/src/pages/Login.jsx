import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction } from "../redux/actions/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


export default function Login() {
  const [authData, setAuthData] = useState({
    username: "",
   
    password: "",
  
  });
  const { lang } = useSelector((state) => state.lang);

     const dispatch = useDispatch()

  const onChangeHandle = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
    console.log(authData);
  };
const handleSubmit = () =>{
   dispatch(loginAction(authData))
   
}



  return (
    <>

     <div className="back min-h-screen p-5 flex justify-center"> 
         

          <div className=" w-1/2">
          <h1 className="text-2xl text-white font-bold">{lang ? "Giriş Yap" : "Login"} </h1>
          <form>
          <div className="flex flex-col space-y-3 my-5 ">
          
            <input
              value={authData.username}
              name="username"
              onChange={onChangeHandle}
              type="text"
              placeholder={lang ? "Kullanıcı Adı" : "Username"}
              className=" input p-2"
              required
            />


            <input
              value={authData.password}
              name="password"
              onChange={onChangeHandle}
              type="password"
              placeholder={lang ? "Şifre" : "Password"}
              className="input p-2"
            />

         
          </div>
          </form>
          <div className=" text-blue-200 text-lg font-bold underline cursor-pointer mb-4">
            <Link to="/register">{lang ? "Kayıt ol" : "Register" }</Link>
          </div>

          <div
             onClick={handleSubmit} 
            className="cursor-pointer w-full p-2 text-center bg-indigo-400 text-white rounded-md hover:bg-indigo-800 "
          >
            {lang ? "Giriş yap" : "Login"}
          </div>
          </div>
          </div>
    </>
  );
}

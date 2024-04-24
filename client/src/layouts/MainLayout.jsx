import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout(props) {
  return (
    <>
      
        <Header></Header>
        <ToastContainer />

    
        <div>{props.children}</div>
 

      <Footer></Footer>
    </>
  );
}

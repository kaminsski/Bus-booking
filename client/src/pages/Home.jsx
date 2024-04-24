import React from "react";
import { useSelector } from "react-redux";
import SearchTrip from "../components/SearchTrip";
import Companies from "../components/Companies";

export default function Home() {
  const { lang } = useSelector((state) => state.lang);
  const { loader } = useSelector((state) => state.loader);
  return (
    <>
      {loader ? (
        <div className="fixed bg-opacity-70 w-screen h-screen top-0  bg-gray-100 z-10 pt-[260px] pl-[150px] sm:pt-[360px] sm:pl-[300px] md:pt-[360px] md:pl-[500px] xl:pt-[360px] xl:pl-[700px]">
          <div className="lds-dual-ring  z-20 h-screen w-screen"></div>
        </div>
      ) : null}

      <div className="min-h-screen dark:bg-black dark:text-white">
        <div className="relative ">
          <img
            className="w-full h-[300px] object-cover"
            src="/hero.jpeg"
            alt=""
          />
          <h2 className="absolute bottom-0 left-0 text-white font-bold text-4xl pb-4 pl-4">
            {lang
              ? "En iyi fiyatlar Bus Booking'de"
              : "Best prices at Bus Booking"}{" "}
          </h2>
        </div>
        <SearchTrip></SearchTrip>
        <Companies></Companies>
      </div>
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import SearchTrip from "../components/SearchTrip";
import Companies from "../components/Companies";

export default function Home() {
  const { lang } = useSelector((state) => state.lang);

  return (
    <>
      <div className="min-h-screen dark:bg-black dark:text-red-500">
        <div className="relative ">
        <img className="w-full h-[300px] object-cover" src="/hero.jpeg" alt="" />
        <h2 className="absolute bottom-0 left-0 text-white font-bold text-4xl pb-4 pl-4">{lang ? "En iyi fiyatlar Bus Booking'de" : "Best prices at Bus Booking"} </h2>
        </div>
        <SearchTrip></SearchTrip>
        <Companies></Companies>
      </div>
    </>
  );
}

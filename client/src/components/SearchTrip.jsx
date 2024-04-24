import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../config/env";
import Trip from "./Trip";
import { FaExchangeAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { getTripsAction } from "../redux/actions/trip";

function SearchTrip() {
  const [provinces, setProvinces] = useState(null);


  const dispatch = useDispatch();

  const [fromWhere, setFromWhere] = useState("");
  const [toWhere, setToWhere] = useState("");
  const [date, setDate] = useState("");

  const { lang } = useSelector((state) => state.lang);
  const { tripRx } = useSelector((state) => state.tripRx);

  const today = new Date().toISOString().split("T")[0];

  console.log(tripRx);

  useEffect(() => {
    const getProvinces = async () => {
      const response = await axios.get(
        "https://turkiyeapi.dev/api/v1/provinces"
      );
      const provincesArray = response.data.data;
      provincesArray.sort((a, b) => {
        return b.population - a.population;
      });

      setProvinces(provincesArray);
    };
    getProvinces();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/trip/filterTrip`, {
        fromWhere,
        toWhere,
        date,
      });
      dispatch(getTripsAction(fromWhere, toWhere, date));
      localStorage.setItem("trips", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Arama işlemi başarısız oldu:", error);
    }
  };

  const reverseProvince = () => {
    setFromWhere(toWhere);
    setToWhere(fromWhere);
  };

  return (
    <>
      <div className=" flex-col flex sm:flex-row items-center justify-center bg text-xl my-10 gap-5 font-semibold flex-wrap ">
        <div className="relative">
          <FaLocationDot className="absolute left-1 top-4"></FaLocationDot>
          <label
            className="absolute left-2 -top-2 bg-white text-sm"
            htmlFor="fromWhere"
          >
            {" "}
            {lang ? "Nereden" : "From"}{" "}
          </label>
          <select
            className="border-2 p-3 rounded-xl border-gray-500 pl-5"
            name="fromWhere"
            id="fromWhere"
            value={fromWhere}
            onChange={(e) => setFromWhere(e.target.value)}
          >
            <option value="">Select an option</option>
            {provinces &&
              provinces.map((province, id) => (
                <option key={id} value={province.name}>
                  {province.name}
                </option>
              ))}
          </select>
        </div>
        <FaExchangeAlt
          onClick={reverseProvince}
          size={40}
          className="bg-blue-400 rounded-full p-2 text-white my-1 sm:my-0 rotate-90 sm:rotate-0"
        />

        <div className="relative">
          <FaLocationDot className="absolute left-1 top-4"></FaLocationDot>

          <label
            className="absolute left-2 -top-2 bg-white text-sm"
            htmlFor="toWhere"
          >
            {" "}
            {lang ? "Nereye" : "To"}{" "}
          </label>

          <select
            className="border-2 p-3 rounded-xl border-gray-500 pl-5"
            name="toWhere"
            id="toWhere"
            value={toWhere}
            onChange={(e) => setToWhere(e.target.value)}
          >
            <option value="">Select an option</option>
            {provinces &&
              provinces.map((province, id) => (
                <option key={id} value={province.name}>
                  {province.name}
                </option>
              ))}
          </select>
        </div>
        <div className="relative">
          <label
            className="absolute left-2 -top-2 bg-white text-sm"
            htmlFor="date"
          >
            {" "}
            {lang ? "Tarih" : "Departure"}{" "}
          </label>

          <input
            className="border-2 p-3 rounded-xl border-gray-500"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={today} // Min attribute ile bugünkü tarihi belirt
          />
        </div>
        <button
          onClick={handleSearch}
          className="rounded-xl text-white bg-blue-400 p-3 w-[150px] sm:w-[]"
        >
          {lang ? "Ara" : "Search"}
        </button>
      </div>
      <Trip ></Trip>
    </>
  );
}

export default SearchTrip;

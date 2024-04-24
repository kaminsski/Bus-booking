import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../config/env";
import { FaLocationPin } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

export default function Profile() {
  const [tickets, setTickets] = useState(null);
  const { auth } = useSelector((state) => state.auth);
  const { lang } = useSelector((state) => state.lang);

  useEffect(() => {
    const getUserTickets = async () => {
      const response = await axios.get(
        `${BASE_URL}/ticket/${auth && auth._id}`
      );
      setTickets(response.data);
    };
    getUserTickets();
  }, [auth]);

  return (
    
    <div className="min-h-screen dark:text-white dark:bg-black">
      <div className="bg-gray-100 dark:bg-gray-500  min-h-screen">
        <div className="cardTop flex flex-wrap  items-center sm:flex justify-center pt-20">
          <div className="w-2/3 md:w-1/3 h-48 shadow-xl">
            <div className="flex w-full h-full relative">
              <img src="/logo.png" alt="" />
            </div>
          </div>
          <div className="md:col-span-3 h-48 shadow-xl space-y-2 p-3">
            <div className="flex">
              <span className="text-sm font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 dark:bg-gray-500 whitespace-no-wrap w-2/6">
              { lang ? "Kullanıcı:":"Username: "}

              </span>
              <input
                className="px-4 cursor-default w-4/6 m-1 dark:bg-black"
                type="text"
                value={auth ? auth.username : ""}
                readOnly
              />
            </div>
            <div className="flex">
              <span className="text-sm font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 dark:bg-gray-500  whitespace-no-wrap w-2/6">
                Email:
              </span>
              <input
                className="px-4 cursor-default w-4/6 m-1 dark:bg-black "
                type="text"
                value={auth ? auth.email : ""}
                readOnly
              />
            </div>

            <div className="flex justify-center">
              <div className="md:col-span-3 p-4 flex justify-center"></div>
            </div>
          </div>
        </div>
        <h3 className=" text-4xl font-semibold text-center my-10">  { lang ? "Biletlerin":"Your Tickets "}
</h3>
        <div className=" bg-white dark:bg-gray-500  mt-10 w-3/4 md:w-1/2  mx-auto p-2">
        
          {tickets &&
            tickets.map((ticket, id) => (
              <div key={id} className=" text-xl  mx-2 bg-green-100 dark:bg-black  my-4 p-2 rounded-lg">
                <div className=" font-bold underline flex"> <FaLocationPin></FaLocationPin>   { lang ? "Nereden":"From "}
 </div> <div>  {ticket.departureLocation} </div>
                
                <div className=" font-bold underline flex"> <FaLocationPin></FaLocationPin>   { lang ? "Nereye":"To "}
</div> <div> {ticket.arrivalLocation} </div>
                <div className=" font-bold underline flex"><IoTime></IoTime>   { lang ? "Tarih":"Departure "}
 </div> <div className=" text-nowrap overflow-hidden"> {ticket.departureTime} </div>
                <div className=" font-bold underline flex"><MdAirlineSeatReclineExtra></MdAirlineSeatReclineExtra>   { lang ? "Koltuk No":"Seat No "}
 </div> <div> {ticket.seatNumberNo} </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

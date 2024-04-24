import React, { useEffect } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaBus } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { SlLogin } from "react-icons/sl";

import { getTripsAllAction } from "../redux/actions/trip";

function Trip() {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.auth);
  const { lang } = useSelector((state) => state.lang);

  const { tripRx } = useSelector((state) => state.tripRx);

useEffect(() => {
  dispatch(getTripsAllAction())
}, [])


  return (
    <div className=" ">
      {tripRx === null ? (
        null
      ) : tripRx && tripRx.length === 0 ? (
        <div className=" w-full  md:w-1/3 flex mx-auto text-center dark:text-black bg-yellow-300 p-3 font-bold items-center"><IoIosWarning size={30}/>
       { lang ? "Size uygun bir yolculuk bulunamadı":"The trip you were looking for was not found "} </div>
      ) : (
        tripRx &&
        tripRx.map((trip, id) => (
          <div key={id} className="dark:bg-black dark:text-white border-2 p-2 bg-gray-100 m-3">
            <div className=" p-4 mb-4 rounded-md flex justify-between flex-wrap">
              <div className="flex w-full sm:w-2/3">
                <div>
                  {new Date(trip.departureTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  <p> {trip.fromWhere} </p>
                </div>
                <div className=" border-t-4  w-full mt-3"></div>{" "}
                {/* Sol çizgi */}
                <div className="flex px-4">
                  <FaClock size={25}></FaClock>
                  <p className="px-1">{trip.hour}:00 { lang ? "saat":"hour "}</p>
                </div>
                <div className=" border-t-4  w-full mt-3"></div>{" "}
                {/* Sağ çizgi */}
                <div>
                  {new Date(
                    new Date(trip.departureTime).getTime() +
                      Number(trip.hour) * 60 * 60 * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  <p> {trip.toWhere} </p>
                </div>
              </div>

              <p className=" text-2xl text-green-500 font-semibold">
                {trip.price} ₺
              </p>
            </div>
            <div className=" flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center justify-start gap-4">
                {trip.bus.company && <> <img
                  className="w-[40px]"
                  src={`${trip.bus.company.image && trip.bus.company.image}.jpeg`}
                  alt=""
                />
                <p>{trip.bus.company.name}</p>
                <FaBus />

                <p>{trip.bus.model}</p>
                <MdEventSeat size={20} />

                <p>{trip.bus.busType}</p> </>}
                
              </div>
              <Link to={`/ticket/${trip._id}`}>
                {auth ? <button className=" p-2 bg-blue-400 text-white flex items-center gap-1 rounded-lg">
                  <BiSolidPurchaseTag size={30} /> { lang ? "Bilet Al":"Buy"}
                </button>:
                <Link to="/register" className=" p-2 bg-blue-400 text-white flex items-center gap-1 rounded-lg">
                <SlLogin size={30} /> { lang ? "Kayıt ol":"Register "}
              </Link>
                }
                
              </Link>
            </div>
          </div>
   
  ))
      )}
    </div>
  );
}

export default Trip;

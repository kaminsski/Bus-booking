import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config/env";
import { FaClock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import BusModal from "../components/BusModal";
import { MdChair } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { nullAction } from "../redux/actions/trip";

function Ticket() {
  const [trip, setTrip] = useState(null);
  const [busModal, setBusModal] = useState(false);
  const [seatOcc, setSeatOcc] = useState(null);

  const dispatch = useDispatch()

  const { id } = useParams();
  const { auth } = useSelector((state) => state.auth);
  const { tripRx } = useSelector((state) => state.tripRx);



  useEffect(() => {
    const getTrip = async () => {
      const response = await axios.get(`${BASE_URL}/trip/${id}`);
      setTrip(response.data);
    };
    getTrip();
  }, []);

  const capacity = trip && trip.bus.capacity;

  // Üçe böl ve tam sayıya yuvarla
  const numberOfSets = Math.ceil(capacity / 3);

  const setSeat = async (tripId, userId) => {
    setBusModal(!busModal);
    const response = await axios.post(`${BASE_URL}/seat/isOcc`, { tripId });
    console.log(response.data);
    response.data.forEach((seat) => {
      if(trip.bus.busType === "2+1"){
        const seatCodeF = Math.floor(Number(seat.No) / 3);
        const seatCodeS = Math.floor(Number(seat.No) % 3);
        const seatCode = seatCodeF.toString() + "-" + seatCodeS.toString();
        const chair = document.getElementById(seatCode);
        if (seat.user.gender == "male") {
          chair && chair.classList.add("text-blue-400", "pointer-events-none");
          console.log(seat.user.gender);
        } else {
          chair && chair.classList.add("text-pink-400", "pointer-events-none");
          console.log(seat.user.gender);
        }
      }else{
        const seatCodeF = Math.floor(Number(seat.No) / 4);
        const seatCodeS = Math.floor(Number(seat.No) % 4);
        const seatCode = seatCodeF.toString() + "-" + seatCodeS.toString();
        const chair = document.getElementById(seatCode);
        if (seat.user.gender == "male") {
          chair && chair.classList.add("text-blue-400", "pointer-events-none");
          console.log(seat.user.gender);
        } else {
          chair && chair.classList.add("text-pink-400", "pointer-events-none");
          console.log(seat.user.gender);
        }
      }
  
    });
  };

  const buyTicket = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/ticket`, {
        user: auth._id,
        departureTime: trip.departureTime,
        departureLocation: trip.fromWhere,
        arrivalLocation: trip.toWhere,
        seatNumberNo: seatOcc,
        bus: trip.bus._id,
      });

      const responseSeat = await axios.post(`${BASE_URL}/seat`, {
        user: auth._id,

        trip: trip._id,
        No: seatOcc,
        isOccuoied: true,
      });
      localStorage.removeItem("trips");
      dispatch(nullAction())
      window.location.href="/profile"
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen">
      {trip && (
        <div className=" border-2 p-2 bg-gray-100 m-3">
          <div className=" p-4 mb-4 rounded-md flex justify-between">
            <div className="flex w-full px-1">
              <div>
                {new Date(trip.departureTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                <p> {trip.fromWhere} </p>
              </div>
              <div className=" border-t-4  w-full mt-3"></div> {/* Sol çizgi */}
              <div className="flex px-4">
                <FaClock size={25}></FaClock>
                <p className="px-1">{trip.hour}:00 saat</p>
              </div>
              <div className=" border-t-4  w-full mt-3"></div> {/* Sağ çizgi */}
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
          </div>
          <div className="bg-white p-2">
            <span className=" font-bold text-lg underline">Departure</span>
            <span> {new Date(trip.departureTime).toLocaleString()} </span>
          </div>
          <div className="bg-white p-2">
            <span className=" font-bold text-lg underline">Passenger</span>
            <span> {auth && auth.username} </span>
          </div>

          <div className="bg-white p-2">
            <span className="font-bold text-lg underline">
              {" "}
              {seatOcc ? "Selected Seat:" : "Select Seat:"}{" "}
            </span>{" "}
            <span className="bg-yellow-200 p-2 rounded-full">{seatOcc}</span>
            <button
              className="flex items-center bg-yellow-400 p-3 text-xl font-bold gap-2 my-4"
              onClick={() => setSeat(trip._id, auth._id)}
            >
              <MdChair></MdChair> Koltuk seç
            </button>
            {busModal && (
              <BusModal
                busModal={busModal}
                setBusModal={setBusModal}
                numberOfSets={numberOfSets}
                setSeatOcc={setSeatOcc}
                busType={trip.bus.busType}
              ></BusModal>
            )}
          </div>
          <div className="text-lg font-semibold">Company</div>
          <div className=" flex items-center justify-between gap-4">
            <div className="flex items-center justify-start gap-4 bg-white p-3">
              <div>
              <img
                className="w-[40px]"
                src={`/${trip.bus.company.image}.jpeg`}
                alt=""
              />
              <p className=" font-semibold">{trip.bus.company.name}</p>
              </div>
              <p className=" h-[150px] justify-between overflow-auto">{trip.bus.company.details}</p>
            </div>
          </div>
          <div className="text-lg font-semibold mt-4">Bus</div>

          <div className="flex items-center mt-2">
            <div className="bg-white p-4 ">
              {" "}
              <div>  
                <span className="font-semibold text-lg">Bus Model:</span>{" "}
              <span>{trip.bus.model}</span>
              </div>
              <div>  
                <span className="font-semibold text-lg">Bus Capacity:</span>{" "}
              <span>{trip.bus.capacity}</span>
              </div>
              <div>  
                <span className="font-semibold text-lg">Bus Type:</span>{" "}
              <span>{trip.bus.busType}</span>
              </div>
              <div className=" h-[100px] justify-between overflow-auto">  
                <span className="font-semibold text-lg">Bus Details:</span>{" "}
              <span >{trip.bus.details}</span>
              </div>
            
         
            </div>
          </div>
          <div className=" flex justify-end">
          <button className="p-2 bg-green-400 mt-2 font-semibold rounded-lg flex gap-1 items-center" onClick={buyTicket}><GiConfirmed />
Onay</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Ticket;

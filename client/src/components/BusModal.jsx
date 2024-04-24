import React from "react";
import { MdChair } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function BusModal({
  busModal,
  setBusModal,
  numberOfSets,
  setSeatOcc,
  busType,
}) {
  const seatFunc = (e) => {
    const seatCode = e.target.parentElement.id;
    const seatNumberList = seatCode.split("-");
    if(busType==="2+2"){
      const seatNumber =
      Number(seatNumberList[0]) * 4 + Number(seatNumberList[1]);
      if (seatNumber) {
        setSeatOcc(seatNumber);
        setBusModal(!busModal);
      }
    }else{
      const seatNumber =
      Number(seatNumberList[0]) * 3 + Number(seatNumberList[1]);
      if (seatNumber) {
        setSeatOcc(seatNumber);
        setBusModal(!busModal);
      }
    }
   
    
  };
  console.log(busType);
  return (
    <>
      <div className="bg-gray-200 bg-opacity-75 absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
        <div className="seat relative">
          <span className="z-10" onClick={() => setBusModal(!busModal)}>
            <MdCancel color="red" size={30}></MdCancel>
          </span>
          <img className="h-[700px] w-[300px]" src="/koltuk.png" alt="" />
          <div className="absolute top-16 left-0 w-full pt-4 mt-7">
            {Array.from({ length: numberOfSets }).map((_, index) => (
              <div
                key={index}
                id={index}
                className="flex justify-between w-full px-8 py-1"
              >
                {busType === "2+2" ? (
                  <>
                    <div className="double flex">
                      <MdChair
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-1`}
                        size={30}
                      />
                      <MdChair
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-2`}
                        size={30}
                      />
                    </div>
                    <div className="double flex">
                      <MdChair
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-3`}
                        size={30}
                      />
                      <MdChair
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-4`}
                        size={30}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="single">
                      <MdChair
                        className=""
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-1`}
                        size={30}
                      />
                    </div>
                    <div className="double flex">
                      <MdChair
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-2`}
                        size={30}
                      />
                      <MdChair
                        onClick={(e) => seatFunc(e)}
                        id={`${index}-3`}
                        size={30}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BusModal;

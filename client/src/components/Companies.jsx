import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config/env";
import { useDispatch } from "react-redux";

function Companies() {
  const [companies, setCompanies] = useState(null);
 const dispatch = useDispatch()

  useEffect(() => {
    const getCompanies = async () => {
      const response = await axios.get(`${BASE_URL}/company`);
      setCompanies(response.data);
    };
    getCompanies()
    dispatch({ type: "LOADER", payload: false })
  }, []);
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-12 mx-3">
      {companies &&
        companies.map((company, id) => (
          <div key={id} className=" bg-gray-200 dark:bg-gray-800 flex flex-col items-center w-full sm:w-1/3 lg:w-1/4 p-3 mb-10 rounded-lg">
            <img className=" w-[200px] rounded-full shrink-0 h-[200px]" src={`/${company.image}.jpeg`} alt={company.image} />
            <p className=" text-2xl font-bold"> {company.name} </p>
            <p className=" text-justify"> {company.details} </p>
          </div>
        ))}
    </div>
  );
}

export default Companies;

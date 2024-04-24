import axios from "axios";
import { BASE_URL } from "../../config/env";

export const loadTripAction = () => {
    return {
      type: "LOAD_DATA"
    };
  };

export const getTripsAction =
  (fromWhere, toWhere, date) => async (dispatch) => {
    try {
      const data = await axios.post(`${BASE_URL}/trip/filterTrip`, {
        fromWhere,
        toWhere,
        date,
      });
      dispatch({ type: "GET_TRIPS", payload: data.data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const nullAction = () => async (dispatch) => {
  try {

    dispatch({ type: "NULL", payload: null });
  } catch (error) {
    console.log(error);
  }
};



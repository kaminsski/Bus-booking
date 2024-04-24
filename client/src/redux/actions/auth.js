
import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../config/env";


export const loadDataAction = () => {
    return {
      type: "LOAD_DATA"
    };
  };

  export const logoutAction = () => async(dispatch) => {
    try {


        dispatch({ type: "LOGOUT" });

        window.location = "/";
    } catch (error) {
        console.log(error);
    }
  };

export const registerAction = (authData) => async(dispatch) =>{
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, authData);

        await dispatch({type:"REGISTER", payload: response.data});
        window.location = "/"

    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message, {
            position:"top-right",
            autoClose:5000
        })
    }
};

export const loginAction = (authData) => async(dispatch) =>{
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, authData);
        dispatch({type:"LOGIN", payload: response.data});
        window.location = "/"

    }  catch (error) {
        toast.error(error.response.data.msg, {
            position:"top-right",
            autoClose:5000
        });
    }
}

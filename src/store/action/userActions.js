import axios from "axios";
import { CREATE_USER } from "./types";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/signup", userData);
    dispatch({
      type: CREATE_USER,
    });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

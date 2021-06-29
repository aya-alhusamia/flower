import axios from "axios";
import { CREATE_SHOP, FETCH_SHOPS } from "./types";

export const createShop = (newShop) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newShop) formData.append(key, newShop[key]);
    const res = await axios.post("http://127.0.0.1:8000/shops/", formData);
    this.shops.push(res.data);

    dispatch({
      type: CREATE_SHOP,
      payload: { newShop: res.data },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchShops = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/shops");
    dispatch({
      type: FETCH_SHOPS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

import axios from "../../api/axiosCofig";
import { loadproduct } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (product) => async (dispatch, getstate) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};

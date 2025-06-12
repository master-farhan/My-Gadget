import axios from "../../api/axiosCofig";
import { loadproduct } from "../reducers/productSlice";


// Load 
export const asyncLoadProducts = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

// Create 
export const asyncCreateProduct = (product) => async (dispatch, getstate) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};

// Update 
export const asyncUpdateProduct = (id,product) => async (dispatch, getstate) => {
  try {
    await axios.patch("/products/"+ id, product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};

// Delete 
export const asyncDeleteteProduct = (id) => async (dispatch, getstate) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};
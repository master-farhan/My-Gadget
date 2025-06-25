// /src/store/actions/productActions.jsx

import axios from "../../api/axiosCofig";
import { loadproduct } from "../reducers/productSlice";

// Load all products
export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.error("Failed to load products:", error);
  }
};

// Create a new product
export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.error("Failed to create product:", error);
  }
};

// Update an existing product by id
export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.error("Failed to update product:", error);
  }
};

// Delete a product by id
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.error("Failed to delete product:", error);
  }
};

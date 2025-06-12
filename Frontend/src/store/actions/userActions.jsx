import axios from "../../api/axiosCofig";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncCurrentUser = (user) => async (dispatch, getstate) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    else console.log("User Not Logged In");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoadusers = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/users");
    dispatch(loadUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogOutUser = (user) => async (dispatch, getstate) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    dispatch(loadUser());
    if (data[0] != undefined) {
      localStorage.setItem("user", JSON.stringify(data[0]));
    }
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getstate) => {
  try {
    const res = await axios.post("/users", user);
  } catch (error) {
    console.log(error);
  }
};

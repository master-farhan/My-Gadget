import axios from "../../api/axiosCofig";
import { loadUser, removeUser } from "../reducers/userSlice";

// ✅ Get current user from localStorage and load into Redux
export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    else console.log("User not logged in");
  } catch (error) {
    console.error("Error loading current user:", error);
  }
};

// ✅ Load all users (for admin or general use)
export const asyncLoadUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/users");
    // If you're loading all users into Redux, use a different action
    // Example: dispatch(loadAllUsers(data));
    console.log("All users loaded", data);
  } catch (error) {
    console.error("Error loading users:", error);
  }
};

// ✅ Log out user
export const asyncLogOutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

// ✅ Log in user with error throwing when credentials are wrong
export const asyncLoginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${credentials.email}&password=${credentials.password}`
    );

    if (data[0]) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loadUser(data[0]));
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    // Throw error so calling component can catch and handle it
    throw new Error(error.message || "Login failed");
  }
};

// ✅ Update user (like cart, profile etc.)
export const asyncUpdateUser = (id, updatedUser) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, updatedUser);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loadUser(data)); // updated state
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// ✅ Register new user
export const asyncRegisterUser = (user) => async () => {
  try {
    const { data } = await axios.post("/users", user);
    console.log("User registered:", data);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

// ✅ Delete user
export const asyncDeleteteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(asyncLogOutUser());
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-gadget-backend-3udq.onrender.com/",
});

export default instance;

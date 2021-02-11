import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-clone-d52ea/us-central1/api",
});

export default instance;

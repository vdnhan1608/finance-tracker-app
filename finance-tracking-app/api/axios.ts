import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.4:8080/api", // Change to current ipconfig
  timeout: 10000,
});

export default api;

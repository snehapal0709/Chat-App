import axios from "axios";

console.log("API_URL = ", import.meta.env.VITE_API_URL);


export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});



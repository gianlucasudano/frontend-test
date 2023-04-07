import axios from "axios";

export const axiosConfig = { headers: {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
}} 

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: axiosConfig.headers,
});

export default axiosInstance;

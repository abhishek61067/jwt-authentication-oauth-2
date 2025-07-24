import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

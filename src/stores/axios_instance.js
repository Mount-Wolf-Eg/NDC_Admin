import axios from "axios";
import { useAuthStore } from "./auth/auth";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data;",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      useAuthStore().logOut();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

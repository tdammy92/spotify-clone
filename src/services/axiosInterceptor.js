import axios, { AxiosInstance } from "axios";
import { getData } from "./Db";
import BaseApi from "./BaseApi";

const axiosInstance= axios.create({
  baseURL: BaseApi,
  method:'GET',
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const acces_token = await getData("accessToken");

  // console.log(acces_token)
  req.headers.Authorization = `Bearer ${acces_token}`;
  return req;
});

export default axiosInstance;

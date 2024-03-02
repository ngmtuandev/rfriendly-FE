import axios from "axios";

const axiosClientApi = axios.create({
  baseURL: "http://localhost:1001/care-health/api/v1",
});

export default axiosClientApi;

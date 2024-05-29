import axios from "axios";

const instance = axios.create();

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    throw err["response"]["data"];
  }
);

export default instance;

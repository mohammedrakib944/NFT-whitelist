import axios from "axios";

const url = "https://backend.moonflex.xyz/api";

const Api = axios.create({
  baseURL: url,
});

export default Api;

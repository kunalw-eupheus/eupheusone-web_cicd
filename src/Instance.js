import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.eupheusapp.com/api/",
});

export default instance;
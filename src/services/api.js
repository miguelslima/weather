import axios from "axios";

export const key = "86a7cc67";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;

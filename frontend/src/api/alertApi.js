import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const fetchAlerts = (params) => {
  return API.get("/alerts", { params });
};

export const createAlert = (data) => {
  return API.post("/alerts", data);
};

export const updateAlert = (id, data) => {
  return API.put(`/alerts/${id}`, data);
};

export const deleteAlert = (id) => {
  return API.delete(`/alerts/${id}`);
};

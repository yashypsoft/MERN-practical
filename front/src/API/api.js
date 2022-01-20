import Axios from "axios";
const axiosConfig = {
  baseURL: `http://${window.location.hostname}:3000/api/v1/`,
};

export const axios = Axios.create(axiosConfig);

// AUTH
export const authAPI = {
  login: (data) => axios.post(`/users/login`, data),
  // signup: (data) => axios.post(`/users/signup`, data),
};

// USERS
export const usersAPI = {
  getAll: () => axios.get(`/users`),
  getOne: (id) => axios.get(`/users/${id}`),
  add: (data) => axios.post(`/users`, data),
  update: (data) => axios.put(`/users`, data),
  delete: (id) => axios.delete(`/users/${id}`),
};

// Courses
export const courseAPI = {
  getAll: () => axios.get(`/course`),
  getOne: (id) => axios.get(`/course/${id}`),
  add: (data) => axios.post(`/course`, data),
  update: (data) => axios.put(`/course`, data),
  delete: (id) => axios.delete(`/course/${id}`),
};

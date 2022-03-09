import axios from "axios";
export const apiTrainerCreate = axios.create({
  baseURL: "http://localhost:8080/trainers/",
});
export const userApi = axios.create({
  baseURL: "http://localhost:8080/users/",
});

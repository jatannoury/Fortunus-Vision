import axios from "axios";
const hostname = "192.168.100.192";
const portname = 3001;
const BACKEND_URL = `http://${hostname}:${portname}/api/v1`;
axios.defaults.baseURL = BACKEND_URL;
export function registerUser(email, password) {}

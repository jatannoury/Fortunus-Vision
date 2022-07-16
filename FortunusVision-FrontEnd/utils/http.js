import axios from "axios";
const hostname = "192.168.100.192";
const portname = 3001;
const BACKEND_URL = `http://${hostname}:${portname}/api/v1`;
axios.defaults.baseURL = BACKEND_URL;
import { useState } from "react";
let data;
export async function registerUser(email, password, username) {
  console.log("In http", email, password, username);
  const response = await axios({
    method: "post",
    url: "/user/register",
    data: {
      email: email,
      password: password,
      userName: username,
    },
  }).then(
    (response) => {
      data = response.data;
      response.data;
    },

    (error) => {
      data = error;
      throw error;
    }
  );

  return data;
}

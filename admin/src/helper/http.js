import axios from "axios";
const BACKEND_URL = "http://192.168.1.117:3001/api/v1";

axios.defaults.baseURL = BACKEND_URL;
let data;
export async function signUserIn(email, password) {
  await axios({
    method: "post",
    url: "/user/signIn",
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}
export async function getAllUsers() {
  await axios({
    method: "post",
    url: "/admin/getAllUsers",
    data: {},
  })
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

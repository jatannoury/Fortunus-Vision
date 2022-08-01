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
export async function deleteUser(Id) {
  await axios({
    method: "post",
    url: "/admin/deleteUser",
    data: {
      Id: Id,
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

export async function searchUser(data) {
  await axios({
    method: "post",
    url: "/admin/searchUser",
    data: {
      data: data,
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

export async function getRequests() {
  await axios({
    method: "post",
    url: "/admin/getRequests",
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

export async function manipulateRequest(info, state) {
  await axios({
    method: "post",
    url: "/admin/manipulateRequest",
    data: {
      info: info,
      state: state,
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
export async function fetchData() {
  await axios({
    method: "post",
    url: "/admin/fetchData",
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

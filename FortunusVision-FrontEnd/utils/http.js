import axios from "axios";
const hostname = "192.168.1.117";
const portname = 3001;
const BACKEND_URL = `http://${hostname}:${portname}/api/v1`;
axios.defaults.baseURL = BACKEND_URL;
import { useId, useState } from "react";
let data;
export async function registerUser(email, password, username) {
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

export async function signUserIn(email, password) {
  const response = await axios({
    method: "post",
    url: "/user/signIn",
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}
export async function addChat(
  user_id,
  expert_id,
  price,
  expert_name,
  id,
  user_name
) {
  const response = await axios({
    method: "post",
    url: "/user/addChat",
    data: {
      user_id,
      expert_id,
      price,
      expert_name,
      id,
      user_name,
    },
  })
    .then((response) => {
      console.log("sucess");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function getExperts(type) {
  const response = await axios({
    method: "post",
    url: "/user/getExperts",
    data: {
      userType: type,
    },
  })
    .then((response) => {
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function getExpertsById(Id) {
  const response = await axios({
    method: "post",
    url: "/user/getExperts",
    data: {
      expertId: Id,
    },
  })
    .then((response) => {
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function addAppointment(id, day, time) {
  const response = await axios({
    method: "post",
    url: "/user/addAppointment",
    data: {
      user_id: id,
      day: day,
      time: time,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function getAppointment(id) {
  console.log("ID", id);
  const response = await axios({
    method: "get",
    url: "/user/getAvailability",
    params: {
      Id: id,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function setAppointment(expert_id, user_id, date, time) {
  const response = await axios({
    method: "post",
    url: "/user/setAppointment",
    data: {
      expert_id: expert_id,
      user_id: user_id,
      day: date,
      time: time,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function updateAppointment(
  expert_id,
  selectedTime,
  oldAvailability
) {
  const response = await axios({
    method: "post",
    url: "/user/updateAppointment",
    data: {
      expert_id: expert_id,
      oldAvailabilty: oldAvailability,
      selectedTime: selectedTime,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function updateCoins(userId, coins) {
  const response = await axios({
    method: "post",
    url: "/user/updateCoins",
    data: {
      user_id: userId,
      coins: coins,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function switchUserType(
  Id,
  years_of_experience,
  phone_price,
  voice_price,
  rating,
  age,
  Quote,
  userType
) {
  const response = await axios({
    method: "post",
    url: "/user/switchUserType",
    data: {
      Id: Id,
      years_of_experience: years_of_experience,
      phone_price: phone_price,
      voice_price: voice_price,
      rating: rating,
      age: age,
      Quote: Quote,
      userType: userType,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function triggerCall(Id, name, state) {
  console.log("TRIGGEREDDDDDDD", Id, name, state);
  const response = await axios({
    method: "post",
    url: "/user/triggerCall",
    data: {
      Id: Id,
      name: name,
      state: state,
    },
  })
    .then((response) => {
      console.log("AKAL");
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function getHistory(Id) {
  const response = await axios({
    method: "get",
    url: "/user/getHistory",
    params: {
      Id: Id,
    },
  })
    .then((response) => {
      console.log(response);
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function addHistory(Id, name, price) {
  const response = await axios({
    method: "post",
    url: "/user/addHistory",
    data: {
      Id: Id,
      name: name,
      price: price,
    },
  })
    .then((response) => {
      console.log(response);
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function addRating(Id, rating) {
  const response = await axios({
    method: "post",
    url: "/user/addRating",
    data: {
      Id: Id,
      rating: rating,
    },
  })
    .then((response) => {
      console.log(response);
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

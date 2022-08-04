import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/users";
import { View } from "react-native";

const Logout = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(logout());
  return <></>;
};

export default Logout;

import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import AppointmentCard from "../components/AppointmentCard";
import { MaterialIcons } from "@expo/vector-icons";
const AppointmentScreen = () => {
  return <AppointmentCard name="Joseph" price="50" waiting="99" />;
};

export default AppointmentScreen;

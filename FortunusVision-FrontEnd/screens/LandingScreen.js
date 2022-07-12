import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import ExpertCard from "../components/ExpertCard";
import Colors from "../constants/colors";
const LandingScreen = () => {
  return (
    <ExpertCard name="Jamil" years="10" price="100" age="35" rating="4.5" />
  );
};

export default LandingScreen;

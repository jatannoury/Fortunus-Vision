import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import ExpertCard from "../components/ExpertCard";
import Colors from "../constants/colors";
const LandingScreen = () => {
  return <ExpertCard />;
};

export default LandingScreen;
const styles = {
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 10,
  },
  textContainer: {
    position: "absolute",
    top: 80,
    left: 435,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 200,
  },
  infoContainer: {
    position: "absolute",
    top: 135,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  infoContainerOne: {
    position: "absolute",
    top: 155,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  infoContainerTwo: {
    position: "absolute",
    top: 175,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  priceContainer: {
    position: "absolute",
    top: 60,
    left: 640,
    flex: 1,
  },
  price: {
    position: "absolute",
    top: 72,
    left: 652,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
};

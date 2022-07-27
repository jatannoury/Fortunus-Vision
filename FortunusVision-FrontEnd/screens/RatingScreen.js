import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const RatingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default RatingScreen;
const styles = {
  image: {
    flex: 1,
  },
};

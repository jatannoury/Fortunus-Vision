import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const RatingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootContainer}></View>
    </ImageBackground>
  );
};

export default RatingScreen;
const styles = {
  image: {
    flex: 1,
  },
  rootContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 500,
    marginHorizontal: 50,
    marginVertical: 100,
    borderRadius: 10,
  },
};

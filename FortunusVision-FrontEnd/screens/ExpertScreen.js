import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

const ExpertScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default ExpertScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

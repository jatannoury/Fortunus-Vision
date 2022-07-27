import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

const BecomeAnExpert = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default BecomeAnExpert;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

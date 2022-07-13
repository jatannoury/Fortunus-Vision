import React from "react";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";

const RechargeCoinsScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default RechargeCoinsScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
const BookingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default BookingScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

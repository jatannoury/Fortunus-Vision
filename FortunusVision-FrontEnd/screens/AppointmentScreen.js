import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
const AppointmentScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import EmptyCard from "../components/EmptyCard";
const AppointmentScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <EmptyCard />
    </ImageBackground>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

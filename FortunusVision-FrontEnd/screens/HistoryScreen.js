import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import EmptyCard from "../components/EmptyCard";
import ExpertCard from "../components/ExpertCard";
import AppointmentScreen from "./AppointmentScreen";
const HistoryScreen = () => {
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <AppointmentCard price="" />
      </ImageBackground>
    </View>
  );
};

export default HistoryScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

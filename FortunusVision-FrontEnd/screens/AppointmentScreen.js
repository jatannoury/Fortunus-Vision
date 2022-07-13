import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import EmptyCard from "../components/EmptyCard";
import { MaterialIcons } from "@expo/vector-icons";
const AppointmentScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <EmptyCard>
        <View style={styles.textContainer}>
          <Text style={styles.text}>john doe</Text>
        </View>
        <MaterialIcons
          name="phone-in-talk"
          size={35}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.phoneInfo}>10min Call</Text>
        <Text style={styles.time}>Approx Waiting Time: 12 Minutes</Text>
      </EmptyCard>
    </ImageBackground>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
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
  icon: {
    position: "absolute",
    top: 140,
    left: 435,
  },
  phoneInfo: {
    position: "absolute",
    top: 152,
    left: 480,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    position: "absolute",
    top: 190,
    left: 565,
    color: "white",
    fontSize: 10,
  },
});

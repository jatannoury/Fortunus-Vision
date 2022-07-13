import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import EmptyCard from "../components/EmptyCard";
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
});

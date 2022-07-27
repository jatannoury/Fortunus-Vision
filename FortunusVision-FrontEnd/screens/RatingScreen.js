import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
const RatingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Rate Your Experience</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RatingScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  rootContainer: {
    backgroundColor: "white",
    height: 500,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  titleContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});

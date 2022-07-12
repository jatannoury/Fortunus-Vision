import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.contain}>
          <ImageBackground
            source={require("../assets/testing3.png")}
            style={styles.card}
          >
            <Text style={{ fontSize: 50 }}>YOOOOOOO</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  card: {
    minHeight: 200,
    width: "90%",
    marginRight: 100,
    color: "white",
    position: "relative",
    bottom: 40,
    right: 120,
  },
  contain: {
    backgroundColor: Colors.primary500,
    height: 150,
    marginTop: 50,
    marginHorizontal: 20,
    overflow: "hidden",
  },
});

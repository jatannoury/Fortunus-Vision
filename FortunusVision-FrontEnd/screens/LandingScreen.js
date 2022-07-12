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
            <View style={styles.textContainer}>
              <Text style={styles.text}>Jamil</Text>
            </View>
            <Text style={styles.infoContainer}>10 years of experience</Text>
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
    width: "140%",
    marginRight: 100,
    color: "white",
    position: "relative",
    bottom: 60,
    right: 350,
  },
  contain: {
    backgroundColor: Colors.primary500,
    height: 150,
    marginTop: 50,
    marginHorizontal: 20,
    overflow: "hidden",
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
  infoContainer: {
    position: "absolute",
    top: 135,
    left: 435,
    fontSize: 15,
    color: "white",
  },
});

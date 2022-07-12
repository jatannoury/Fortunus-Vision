import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
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
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jamil</Text>
              </View>
              <Text style={styles.infoContainer}>10 years of experience</Text>
              <Text style={styles.infoContainerOne}>85 Years Old</Text>
              <Text style={styles.infoContainerTwo}>
                4.5 <Ionicons name="star" />
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/Container.jpg")}
                style={styles.priceContainer}
              ></Image>
              <Text style={[styles.price]}>100$</Text>
            </View>
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
  infoContainerOne: {
    position: "absolute",
    top: 155,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  infoContainerTwo: {
    position: "absolute",
    top: 175,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  priceContainer: {
    position: "absolute",
    top: 60,
    left: 640,
    flex: 1,
  },
  price: {
    position: "absolute",
    top: 70,
    left: 650,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});

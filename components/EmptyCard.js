import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

const EmptyCard = ({ children, chats, style, card }) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.contain, chats && { height: 81, marginTop: 30 }, style]}
      >
        <ImageBackground
          source={require("../assets/testing3.png")}
          style={card ? card : chats ? styles.chatCard : styles.card}
        >
          {children}
        </ImageBackground>
      </View>
    </View>
  );
};

export default EmptyCard;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    zIndex: 0,
  },
  card: {
    height: "120%",
    right: 80,
    position: "relative",
    bottom: 45,
    resizeMode: "contain",
  },
  contain: {
    backgroundColor: Colors.primary500,
    height: 120,
    marginTop: 15,
    marginHorizontal: 20,
    overflow: "hidden",
    borderRadius: 15,
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
    top: 72,
    left: 652,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  chatCard: {
    minHeight: 200,
    width: "140%",
    marginRight: 100,
    color: "white",
    position: "relative",
    bottom: 60,
    right: 350,
  },
});
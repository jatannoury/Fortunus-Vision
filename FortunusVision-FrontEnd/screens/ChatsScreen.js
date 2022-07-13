import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import EmptyCard from "../components/EmptyCard";
import { FontAwesome } from "@expo/vector-icons";

const ChatsScreen = () => {
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <EmptyCard>
          <View style={styles.textContainer}>
            <Text style={styles.text}>John Doe</Text>
          </View>
          <FontAwesome
            name="microphone"
            size={35}
            color="white"
            style={styles.icon}
          />
        </EmptyCard>
      </ImageBackground>
    </View>
  );
};

export default ChatsScreen;
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
});

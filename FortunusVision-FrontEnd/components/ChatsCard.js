import React from "react";
import EmptyCard from "../components/EmptyCard";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const ChatsCard = () => {
  return (
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
      <Text style={styles.info}>Voice Message</Text>
      <Image
        source={require("../assets/Container.jpg")}
        style={styles.priceContainer}
      ></Image>
      <Text
        style={[
          styles.prices,
          // price.length == 2 && { left: 665 },
          // price.length == 1 && { left: 670 },
        ]}
      >
        100$
      </Text>
    </EmptyCard>
  );
};

export default ChatsCard;
const styles = StyleSheet.create({
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
  info: {
    position: "absolute",
    top: 152,
    left: 470,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  priceContainer: {
    position: "absolute",
    top: 60,
    left: 640,
    flex: 1,
  },
  prices: {
    position: "absolute",
    top: 72,
    left: 652,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});

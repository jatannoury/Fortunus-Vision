import React from "react";
import EmptyCard from "../components/EmptyCard";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const ChatsCard = ({ name, price }) => {
  return (
    <EmptyCard chats={true}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <FontAwesome
        name="microphone"
        size={20}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.info}>Voice Message</Text>
      <View style={styles.box}>
        <Image
          source={require("../assets/Container.jpg")}
          style={styles.priceContainer}
        ></Image>
      </View>
      <Text
        style={[
          styles.prices,
          price.length == 2 && { left: 675 },
          price.length == 1 && { left: 670 },
        ]}
      >
        {price}$
      </Text>
    </EmptyCard>
  );
};

export default ChatsCard;
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 5,
  },
  textContainer: {
    position: "absolute",
    top: 70,
    left: 435,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 200,
  },
  icon: {
    position: "absolute",
    top: 105,
    left: 435,
  },
  info: {
    position: "absolute",
    top: 105,
    left: 455,
    fontSize: 13,
    fontWeight: "500",
    color: "white",
  },
  priceContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  box: {
    position: "absolute",
    top: 65,
    left: 660,
    height: 40,
    width: 60,
  },
  prices: {
    position: "absolute",
    top: 70,
    left: 670,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

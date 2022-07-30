import React from "react";
import EmptyCard from "../components/EmptyCard";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Colors from "../constants/colors";

const ChatsCard = ({ name, price, img }) => {
  return (
    <EmptyCard chats={true}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <FontAwesome
        name="microphone"
        size={20}
        color={Colors.primary600}
        style={styles.icon}
      />
      <Text style={styles.info}>Voice Message</Text>
      <View style={styles.box}>
        <Text style={[styles.prices]}>{price} coins</Text>
      </View>
    </EmptyCard>
  );
};

export default ChatsCard;
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primary600,
    paddingBottom: 5,
  },
  textContainer: {
    position: "absolute",
    top: 70,
    left: 435,
    borderBottomColor: Colors.primary600,
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
    color: Colors.primary600,
  },
  priceContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  box: {
    position: "absolute",
    top: 70,
    left: 640,
    height: 30,
    width: 70,
    borderWidth: 2,
    borderColor: Colors.primary600,
    borderRadius: 5,
  },
  prices: {
    fontWeight: "bold",
    color: Colors.primary600,
    textAlign: "center",
  },
});

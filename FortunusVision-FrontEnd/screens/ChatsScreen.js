import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import ChatsCard from "../components/ChatsCard";

const ChatsScreen = () => {
  let item = [
    {
      name: "Jamil",
      waiting: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      waiting: "6",
    },
    {
      name: "Toni",
      waiting: "5",
      price: "50",
      age: "22",
      rating: "3.5",
      phonePrice: "8",
      waiting: "14",
    },
    {
      name: "Joseph",
      waiting: "7",
      price: "70",
      age: "22",
      rating: "5.0",
      phonePrice: "7",
      waiting: "24",
    },
    {
      name: "Stephanelle",
      waiting: "4",
      price: "55",
      age: "25",
      rating: "2.5",
      phonePrice: "23",
      waiting: "55",
    },
    {
      name: "Hamz",
      waiting: "6",
      price: "520",
      age: "32",
      rating: "4.5",
      phonePrice: "120",
      waiting: "10",
    },
    {
      name: "Mo Tahan",
      waiting: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      waiting: "100",
    },
  ];
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <ChatsCard name="John Doe" price="55" />
      </ImageBackground>
    </View>
  );
};

export default ChatsScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

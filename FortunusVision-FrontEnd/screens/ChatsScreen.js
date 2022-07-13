import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import ChatsCard from "../components/ChatsCard";

const ChatsScreen = () => {
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <ChatsCard />
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

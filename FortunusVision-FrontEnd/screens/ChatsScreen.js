import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import EmptyCard from "../components/EmptyCard";
const ChatsScreen = () => {
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <EmptyCard />
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

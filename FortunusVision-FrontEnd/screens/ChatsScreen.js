import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
const ChatsScreen = () => {
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default ChatsScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

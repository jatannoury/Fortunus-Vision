import { TabRouter } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ProfilePicture from "./ProfilePicture";
const ChatScreen = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route.params.props.name);
    navigation.setOptions({
      title: route.params.props.name,
    });
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

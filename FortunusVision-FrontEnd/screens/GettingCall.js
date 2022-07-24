import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import Colors from "../constants/colors";
export default function GettingCall(props) {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootImgContainer}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

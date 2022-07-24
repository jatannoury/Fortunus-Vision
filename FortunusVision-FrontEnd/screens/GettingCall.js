import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
export default function GettingCall(props) {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootImgContainer}>
        <ProfilePicture
          path={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
          containerStyle={styles.imgContainer}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imgContainer: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: Colors.primary500,
    overflow: "hidden",
    marginRight: 20,
    marginTop: 20,
  },
});

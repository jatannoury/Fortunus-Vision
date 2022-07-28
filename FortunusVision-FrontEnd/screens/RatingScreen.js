import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
const RatingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Rate Your Experience</Text>
        </View>
        <View style={styles.imageRootContainer}>
          <ProfilePicture
            path={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
            containerStyle={styles.imgContainer}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default RatingScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  rootContainer: {
    backgroundColor: Colors.primary700,
    height: 500,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  titleContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  imgContainer: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: Colors.primary500,
    overflow: "hidden",
    marginRight: 20,
    marginVertical: 10,
  },
  imageRootContainer: {
    alignItems: "center",
  },
});

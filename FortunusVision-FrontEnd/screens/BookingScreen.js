import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ExpertsDatesAndTimes from "../components/ExpertsDatesAndTimes";
import { useSelector } from "react-redux";
import UsersDatesAndTimes from "./UsersDatesAndTimes";
const BookingScreen = () => {
  const userType = useSelector((state) => state.user.userType);

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View>{userType === 1 && <ExpertsDatesAndTimes />}</View>
      <View>{userType === 0 && <UsersDatesAndTimes />}</View>
    </ImageBackground>
  );
};

export default BookingScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

import React from "react";
import { View, FlatList, ImageBackground, StyleSheet } from "react-native";
import DatesAndTimes from "../components/DatesAndTimes";
const BookingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View>
        <DatesAndTimes />
      </View>
    </ImageBackground>
  );
};

export default BookingScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

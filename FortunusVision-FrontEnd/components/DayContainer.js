import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/colors";
const DayContainer = ({ day, setIsDisplayed, displayed }) => {
  const [clicked, setIsClicked] = useState(false);
  return (
    <View style={styles.dayContainer}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={[styles.press, clicked && { backgroundColor: "#fcf2d8" }]}
        onPress={() => {
          setIsDisplayed(!displayed);
          setIsClicked(!clicked);
        }}
      >
        <Text>{day}</Text>
      </Pressable>
    </View>
  );
};

export default DayContainer;
const styles = StyleSheet.create({
  press: {
    backgroundColor: Colors.primary600,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  dayContainer: {
    borderRadius: 5,

    marginHorizontal: 10,
    overflow: "hidden",
  },
});

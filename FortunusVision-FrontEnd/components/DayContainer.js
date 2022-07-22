import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/colors";
const DayContainer = ({
  day,
  setSelectedDay,
  dayIsClicked,
  setDayIsClicked,
  style,
}) => {
  const [displayed, setIsDisplayed] = useState(false);

  return (
    <View style={styles.dayContainer}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={[
          styles.press,
          displayed && { backgroundColor: "#fcf2d8" },
          style,
        ]}
        onPress={() => {
          setSelectedDay(day);

          setIsDisplayed(!displayed);
          setDayIsClicked(!dayIsClicked);
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

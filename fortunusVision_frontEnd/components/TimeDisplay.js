import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Colors from "../constants/colors";
const TimeDisplay = ({
  hour,
  setHours,
  setIsHours,
  isHours,
  selectedSubHours,
  setSubHours,
  isSubhours,
}) => {
  const [clicked, setIsClicked] = useState(false);
  return (
    <View
      style={[
        styles.timeContainer,
        clicked && { backgroundColor: Colors.accent500 },
      ]}
      key={hour}
    >
      <Pressable
        onPress={() => {
          setIsClicked(!clicked);
          setHours && setHours(hour);
          setIsHours
            ? setIsHours(!isHours)
            : setSubHours([...selectedSubHours, hour]);
          if ((isSubhours === true) & (clicked === true)) {
            let index = selectedSubHours.indexOf(hour);
            setSubHours([
              ...selectedSubHours.slice(0, index),
              ...selectedSubHours.slice(index + 1),
            ]);
          }
        }}
      >
        <Text key={hour} style={styles.time}>
          {hour}
        </Text>
      </Pressable>
    </View>
  );
};

export default TimeDisplay;
const styles = StyleSheet.create({
  timeContainer: {
    backgroundColor: "#fcf2d8",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  time: {
    color: Colors.primary500,
    marginHorizontal: 5,
  },
});

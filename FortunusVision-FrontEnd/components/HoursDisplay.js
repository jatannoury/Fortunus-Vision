import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const HoursDisplay = () => {
  let hours = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];
  return (
    <View style={{ width: "75%", marginTop: 10 }}>
      <ScrollView horizontal={true}>
        {hours.map((hour) => {
          return (
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{hour}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HoursDisplay;
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

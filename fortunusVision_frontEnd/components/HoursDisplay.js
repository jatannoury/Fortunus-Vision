import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
import TimeDisplay from "./TimeDisplay";
const HoursDisplay = ({
  setHours,
  selectedDay,
  isSubhours,
  selectedHour,
  setIsHours,
  isHours,
  selectedSubHours,
  setSubHours,
}) => {
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
  let subHours = [":00", ":10", ":20", ":30", ":40", ":50"];
  return (
    <View style={[styles.container]}>
      <ScrollView horizontal={true}>
        {!isSubhours
          ? hours.map((hour, index) => {
              return (
                <TimeDisplay
                  hour={hour}
                  key={hour}
                  setHours={setHours}
                  setIsHours={setIsHours}
                  isHours={isHours}
                />
              );
            })
          : selectedHour
          ? subHours.map((item) => {
              return (
                <TimeDisplay
                  hour={
                    selectedHour.split(":")[0] +
                    item +
                    ` ${selectedHour.split(" ")[1]}`
                  }
                  key={item}
                  setHours={setHours}
                  selectedSubHours={selectedSubHours}
                  isHours={isHours}
                  setSubHours={setSubHours}
                  isSubhours={true}
                />
              );
            })
          : selectedSubHours.map((item) => {
              return <TimeDisplay />;
            })}
      </ScrollView>
    </View>
  );
};

export default HoursDisplay;
const styles = StyleSheet.create({
  container: { width: "75%", marginVertical: 10 },
});
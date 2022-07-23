import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const HoursContainer = ({ setSelectedHour, item }) => {
  const [hourIsSelected, setHourIsSelected] = useState(false);

  return (
    <View style={styles.timeContainer} key={item}>
      <Pressable
        android_ripple={{ color: Colors.primary700 }}
        onPress={() => {
          setHourIsSelected(!hourIsSelected);
          setSelectedHour(item);
        }}
        style={[
          styles.Pressable,
          hourIsSelected && { backgroundColor: Colors.primary600 },
        ]}
      >
        <Text style={styles.time}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default HoursContainer;
const styles = StyleSheet.create({
  timeContainer: {
    marginVertical: 20,
    borderRadius: 20,
  },
  time: {
    color: Colors.accent600,
    fontWeight: "bold",
    fontSize: 20,
  },
  Pressable: {
    backgroundColor: Colors.primary700,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

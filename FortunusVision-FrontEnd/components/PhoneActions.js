import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
export default function PhoneActions({ color, style, icon }) {
  return (
    <View>
      <TouchableOpacity
        style={[{ backgroundColor: color }, styles.button, style]}
      >
        <MaterialIcons name={icon} color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    padding: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

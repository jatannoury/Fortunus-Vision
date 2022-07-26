import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
export default function PhoneActions({ color, style, icon, onPress }) {
  return (
    <View>
      <TouchableOpacity
        style={[{ backgroundColor: color }, styles.button, style]}
        onPress={onPress}
      >
        <MaterialIcons name={icon} color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    padding: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
const Button = ({ label, icon, onPress, facebook, FbIcon, style }) => {
  return (
    <View
      style={[
        styles.buttonOuter,
        facebook && { width: "50%", marginTop: 20 },
        style,
      ]}
    >
      <Pressable
        style={[styles.buttonInner, facebook]}
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
      >
        <Text style={[styles.text, facebook && { color: "white" }]}>
          {FbIcon && FbIcon}
          {"  "}
          {label}
          {"  "}
          {icon && icon}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  buttonOuter: {
    marginTop: 80,
    // borderRadius: 20,
    overflow: "hidden",
  },
  buttonInner: {
    borderRadius: 30,
    backgroundColor: Colors.primary500,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#201B26",
    textAlign: "center",
  },
});

import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
const Button = ({ label, icon, onPress }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={styles.buttonInner}
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.text}>
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
    marginHorizontal: 30,
    marginTop: 80,
    borderRadius: 30,
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

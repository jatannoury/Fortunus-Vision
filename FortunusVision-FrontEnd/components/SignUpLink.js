import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
const SignUpLink = ({ onPress, switchScreen, navigation }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.link, switchScreen && styles.pressedText]}>
        Don't have an account?
      </Text>
    </Pressable>
  );
};

export default SignUpLink;
const styles = StyleSheet.create({
  link: {
    color: Colors.primary500,
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  pressedText: {
    color: Colors.primary600,
  },
});

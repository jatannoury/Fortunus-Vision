import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const Title = ({ label, style }) => {
  return (
    <View>
      <Text style={[styles.title, style && style]}>{label}</Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 100,
    color: Colors.primary500,
  },
});
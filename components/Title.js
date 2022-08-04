import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const Title = ({ label, style, icon }) => {
  return (
    <View>
      <Text style={[styles.title, style && style]}>
        {label} {icon}
      </Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 60,
    color: Colors.primary500,
  },
});

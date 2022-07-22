import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const SubmitButton = () => {
  return (
    <Pressable style={styles.rootContainer}>
      <View>
        <Text style={styles.text}>Submit</Text>
      </View>
    </Pressable>
  );
};

export default SubmitButton;
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.primary500,
  },
  text: {
    color: "white",
  },
});

import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const SubmitButt = () => {
  return (
    <Pressable style={styles.rootContainer}>
      <View style={styles.Container}>
        <Text style={styles.text}>Submit</Text>
      </View>
    </Pressable>
  );
};

export default SubmitButt;
const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 25,
  },
  Container: {
    backgroundColor: Colors.primary500,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
});

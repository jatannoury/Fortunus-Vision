import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../constants/colors";
const Input = ({ label }) => {
  return (
    <View>
      <Text style={styles.name}>{label}</Text>
      <TextInput
        placeholderTextColor={Colors.primary600}
        placeholder={`${label}`}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 3,
    color: Colors.primary600,
  },
  name: {
    marginTop: 50,
    fontSize: 20,
    color: Colors.primary500,
  },
});

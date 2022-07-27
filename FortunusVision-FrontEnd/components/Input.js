import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  becomeAnExpert,
} from "react-native";
import Colors from "../constants/colors";
const Input = ({ label, onChangeText, invalid, becomeAnExpert }) => {
  return (
    <View style={[becomeAnExpert && styles.container]}>
      <Text
        style={[
          styles.name,
          invalid && styles.invalidLabel,
          becomeAnExpert && styles.becomeAnExpertTitle,
        ]}
      >
        {label}
      </Text>
      <TextInput
        placeholderTextColor={Colors.primary600}
        placeholder={`${label}`}
        {...becomeAnExpert}
        style={[
          styles.input,
          invalid && styles.invalidInput,
          becomeAnExpert && styles.becomeAnExpert,
        ]}
        onChangeText={onChangeText}
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
  invalidLabel: {
    color: "red",
  },
  invalidInput: {
    borderBottomWidth: 1,
    borderBottomColor: "red",

    color: "red",
    fontSize: 20,
    marginTop: 10,
  },
  becomeAnExpert: {
    borderWidth: 2,
    borderBottomColor: Colors.primary500,
    borderRadius: 5,
  },
  becomeAnExpertTitle: {
    fontSize: 15,
  },
  container: {
    flex: 1,
    padding: 5,
  },
});

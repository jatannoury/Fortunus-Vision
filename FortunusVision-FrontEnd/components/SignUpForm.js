import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "./Input";
const SignUpForm = () => {
  return (
    <View style={styles.form}>
      <Input label={"E-mail"} />
      <Input label={"Username"} />
      <Input label={"Password"} />
      <Input label={"Confirm Password"} />
    </View>
  );
};

export default SignUpForm;
const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
});

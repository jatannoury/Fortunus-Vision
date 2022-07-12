import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "./Input";
const SignUpForm = ({ inputVals, InputChangedHandlers }) => {
  return (
    <View style={styles.form}>
      <Input
        label={"E-mail"}
        invalid={!inputVals.email.isValid}
        onChangeText={InputChangedHandlers.bind(this, "email")}
      />
      <Input
        label={"Username"}
        invalid={!inputVals.email.isValid}
        onChangeText={InputChangedHandlers.bind(this, "username")}
      />
      <Input
        label={"Password"}
        invalid={!inputVals.email.isValid}
        onChangeText={InputChangedHandlers.bind(this, "password")}
      />
      <Input
        label={"Confirm Password"}
        invalid={!inputVals.email.isValid}
        onChangeText={InputChangedHandlers.bind(this, "password_confirmation")}
      />
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

import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../components/Input";

const SignInForm = ({ InputChangedHandlers }) => {
  return (
    <View style={styles.form}>
      <Input
        label={"E-mail"}
        onChangeText={InputChangedHandlers.bind(this, "email")}
      />
      <Input
        label={"Password"}
        onChangeText={InputChangedHandlers.bind(this, "password")}
        password={true}
      />
    </View>
  );
};

export default SignInForm;
const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
});

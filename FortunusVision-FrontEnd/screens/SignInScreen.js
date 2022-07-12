import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Input from "../components/Input";
const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar style="light" backgroundColor={Colors.primary500} />
        <Title label="Fortunus Vision" style={{ fontSize: 50 }} />
        <View style={styles.form}>
          <Input
            label={"E-mail"}
            // onChangeText={InputChangedHandlers.bind(this, "email")}
          />
          <Input
            label={"Password"}
            // onChangeText={InputChangedHandlers.bind(this, "email")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  form: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
});

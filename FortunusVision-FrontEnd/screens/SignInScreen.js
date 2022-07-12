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
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
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
        <SignInForm />
        <Button
          label={"Login Now"}
          icon={
            <Feather name="arrow-right-circle" size={20} style={styles.icon} />
          }
          // onPress={submitHandler}
        />
        <Button
          label={"Facebook"}
          facebook={styles.facebook}
          FbIcon={<Zocial name="facebook" size={22} />}
        />
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
  icon: {
    color: "#ccc",
    marginTop: 50,
  },
  facebook: {
    backgroundColor: "#3C4EB2",
    width: "50%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
  },
});

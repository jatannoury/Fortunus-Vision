import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import { signUserIn } from "../utils/http";
import Colors from "../constants/colors";
import Title from "../components/Title";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import SignUpLink from "../components/SignUpLink";

function switchCurrent() {
  navigation.navigate("SignUP");
}
const SignInScreen = ({ navigation }) => {
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
  });

  function InputChangedHandlers(inputIdentifier, enteredValue) {
    setInputVals((currInput) => {
      return {
        ...currInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  function submitHandler() {
    const submitted = {
      email: inputVals.email,
      password: inputVals.password,
    };
    setInputVals((currInput) => {
      return {
        password: currInput.password,
        email: currInput.email,
      };
    });
    console.log(inputVals);
  }
  const [switchScreen, setSwitch] = useState(false);

  function switchScreenHandler(screen) {}
  //   async function signIn() {
  //     const response = await signUserIn(
  //       inputVals.email.val,
  //       inputVals.password.val
  //     );
  //     console.log("RESPONSE", response);
  //   }
  //   signIn();
  // setSwitch(true);
  // setTimeout(() => {
  //   setSwitch(false);
  //   navigation.navigate(screen);
  // }, 200);
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar style="light" backgroundColor={Colors.primary500} />
        <Title label="Fortunus Vision" style={{ fontSize: 50 }} />
        <SignInForm InputChangedHandlers={InputChangedHandlers} />
        <Button
          label={"Login Now"}
          icon={
            <Feather name="arrow-right-circle" size={20} style={styles.icon} />
          }
          style={{ marginHorizontal: 20, marginTop: 150 }}
          onPress={submitHandler}
        />
        <View style={styles.socialMedia}>
          <Button
            label={"Facebook"}
            facebook={styles.facebook}
            FbIcon={<Zocial name="facebook" size={22} />}
            style={{ borderBottomLeftRadius: 30, borderTopLeftRadius: 30 }}
          />

          <Button
            label={"Google+"}
            facebook={styles.google}
            FbIcon={<FontAwesome5 name="google" size={22} />}
            style={{ borderTopRightRadius: 30, borderBottomRightRadius: 30 }}
          />
        </View>
        <SignUpLink
          onPress={switchScreenHandler.bind(this, "SignUP")}
          switchScreen={switchScreen}
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
  },
  google: {
    backgroundColor: "#E2412C",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
  },
  socialMedia: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
});

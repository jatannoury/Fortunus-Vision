import React, { useState } from "react";
import { registerUser } from "../utils/http";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import Title from "../components/Title";
import SignUpForm from "../components/SignUpForm";
import Button from "../components/Button";
import Colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [switchScreen, setSwitch] = useState(false);
  const [data, setData] = useState("");
  const [inputVals, setInputVals] = useState({
    email: { val: "", isValid: true },
    username: { val: "", isValid: true },
    password: { val: "", isValid: true },
    password_confirmation: { val: "", isValid: true },
  });

  function pressHandler() {
    navigation.navigate("SignIn", {
      // categoryId: itemData.item.id,
    });
  }

  function InputChangedHandlers(inputIdentifier, enteredValue) {
    setInputVals((currInput) => {
      return {
        ...currInput,
        [inputIdentifier]: { val: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const submitted = {
      email: inputVals.email.val,
      username: inputVals.username.val,
      password: inputVals.password.val,
      password_confirmation: inputVals.password_confirmation.val,
    };
    const emailIsValid =
      submitted.email.toString().indexOf("@outlook.com") > -1 ||
      submitted.email.toString().indexOf("@hotmail.com") > -1 ||
      submitted.email.toString().indexOf("@gmail.com") > -1;
    submitted.password = submitted.password.trim();
    const passwordIsValid = checkPassword(submitted.password);
    const password_confirmed =
      submitted.password === submitted.password_confirmation;

    setInputVals((currInput) => {
      return {
        password: { val: currInput.password.val, isValid: passwordIsValid },
        username: { val: currInput.username.val, isValid: true },
        email: { val: currInput.email.val, isValid: emailIsValid },
        password_confirmation: {
          val: currInput.password_confirmation.val,
          isValid: password_confirmed,
        },
      };
    });
    if (!emailIsValid || !passwordIsValid || !password_confirmed) {
      Alert.alert("Invalid Input", "Please check your inputs");
      return;
    } else {
      async function register() {
        const response = await registerUser(
          inputVals.email.val,
          inputVals.password.val,
          inputVals.username.val
        );
        console.log("RESPONSE", response);
        if (response.keyValue) {
          Alert.alert(`${response.keyValue.email} is already in use`);
        } else {
          switchScreenHandler();
        }
      }
      register();
    }
  }

  function switchScreenHandler() {
    setSwitch(true);
    setTimeout(() => {
      setSwitch(false);
      navigation.navigate("SignIn");
    }, 200);
  }

  let formisValid =
    !inputVals.email.isValid ||
    !inputVals.password.isValid ||
    !inputVals.password_confirmation.isValid;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar style="light" backgroundColor={Colors.primary500} />
        <Title label="Register" />
        <SignUpForm
          inputVals={inputVals}
          InputChangedHandlers={InputChangedHandlers}
        />
        {formisValid && (
          <Text style={styles.attention}>
            Invalid input Values - please check your entered data
          </Text>
        )}
        <Button
          label={"Register"}
          icon={
            <Feather name="arrow-right-circle" size={20} style={styles.icon} />
          }
          onPress={submitHandler}
          style={{ marginHorizontal: 20 }}
        />
        <View>
          <Text style={styles.description}>
            By clicking register, I agree to your{" "}
            <Text style={styles.word}>Terms</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

function checkPassword(password) {
  if (password.length < 6) return false;
  for (let i in password) {
    if (password[i] >= "A" && password[i] <= "Z") return true;
  }
  return false;
}

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  icon: {
    color: "#ccc",
    marginTop: 50,
  },
  word: {
    fontWeight: "900",
    color: Colors.primary500,
    textDecorationLine: "underline",
    lineHeight: 50,
  },
  description: {
    textAlign: "center",
    fontWeight: "500",
    color: Colors.primary500,
  },
  attention: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

import React, { useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Input from "../components/Input";
import SubmitButt from "../components/SubmitButt";
import Title from "../components/Title";
import { switchUserType } from "../utils/http";
import { useSelector } from "react-redux";
const BecomeAnExpert = ({ navigation }) => {
  const userId = useSelector((state) => state.user.userId);
  const userType = useSelector((state) => state.user.userType);

  const [inputVals, setInputVals] = useState({
    Id: userId,
    yearsOfExperience: "",
    phonePrice: "",
    voicePrice: "",
    rating: 0,
    Age: "",
    Quote: "",
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
    switchUserType(
      userId,
      inputVals.yearsOfExperience,
      inputVals.phonePrice,
      inputVals.voicePrice,
      0,
      inputVals.Age,
      inputVals.Quote,
      userType
    );
    if (userType == 0) {
      navigation.navigate("Logout");
    } else {
      navigation.goBack();
    }
  }

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <Title label={"Add Your Information Below"} style={styles.title} />
      <View style={styles.flex}>
        <Input
          label={"Phone Call Price "}
          onChangeText={InputChangedHandlers.bind(this, "phonePrice")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
        <Input
          label={"Voice Message Price"}
          onChangeText={InputChangedHandlers.bind(this, "voicePrice")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
      </View>
      <View style={styles.flex}>
        <Input
          label={"Age "}
          onChangeText={InputChangedHandlers.bind(this, "Age")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
        <Input
          label={"Years Of Experience"}
          onChangeText={InputChangedHandlers.bind(this, "yearsOfExperience")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
      </View>
      <View style={styles.flex}>
        <Input
          style={styles.margin}
          label={"Quote "}
          onChangeText={InputChangedHandlers.bind(this, "Quote")}
          becomeAnExpert={{ multiline: true }}
        />
      </View>
      <SubmitButt submit={true} fct={submitHandler} />
    </ImageBackground>
  );
};

export default BecomeAnExpert;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  margin: { marginHorizontal: 15 },
  title: {
    marginBottom: 50,
  },
});
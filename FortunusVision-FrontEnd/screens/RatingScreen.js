import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
import { AntDesign } from "@expo/vector-icons";
import SubmitButt from "../components/SubmitButt";
import { addRating } from "../utils/http";
const RatingScreen = ({ navigation, route }) => {
  const [selected, setSelected] = useState(0);
  let expert_id = route.params.expert_id;
  function setNumber(number) {
    setSelected(number);
  }
  function submitHandler() {
    addRating(expert_id, selected);
    navigation.navigate("Landing Page");
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Rate Your Experience</Text>
        </View>
        <View style={styles.imageRootContainer}>
          <ProfilePicture
            path={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
            containerStyle={styles.imgContainer}
          />
        </View>
        <View style={styles.flex}>
          {selected < 1 ? (
            <AntDesign
              name="staro"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 1)}
            />
          ) : (
            <AntDesign
              name="star"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 1)}
            />
          )}
          {selected < 2 ? (
            <AntDesign
              name="staro"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 2)}
            />
          ) : (
            <AntDesign
              name="star"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 2)}
            />
          )}
          {selected < 3 ? (
            <AntDesign
              name="staro"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 3)}
            />
          ) : (
            <AntDesign
              name="star"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 3)}
            />
          )}
          {selected < 4 ? (
            <AntDesign
              name="staro"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 4)}
            />
          ) : (
            <AntDesign
              name="star"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 4)}
            />
          )}
          {selected < 5 ? (
            <AntDesign
              name="staro"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 5)}
            />
          ) : (
            <AntDesign
              name="star"
              size={50}
              color={Colors.primary500}
              onPress={setNumber.bind(this, 5)}
            />
          )}
        </View>
        <SubmitButt submit={true} fct={submitHandler.bind(this)} />
      </View>
    </ImageBackground>
  );
};

export default RatingScreen;
const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  rootContainer: {
    backgroundColor: Colors.primary700,
    height: 400,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imgContainer: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: Colors.primary500,
    overflow: "hidden",
    marginRight: 20,
    marginVertical: 10,
  },
  imageRootContainer: {
    alignItems: "center",
  },
});

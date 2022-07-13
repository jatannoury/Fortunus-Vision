import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/colors";
const ActionButton = ({ icon, style, coins, name, screenName, navigation }) => {
  console.log(name);
  function switchScreen(name) {
    if (screenName !== "Booking") {
      return;
    }
    console.log(screenName, "INNNNNN");
    navigation.navigate(screenName);
  }
  return (
    <View>
      <View style={[styles.imgContainer]}>
        <Pressable
          android_ripple={{ color: Colors.primary600 }}
          style={[styles.img, style]}
          onPress={switchScreen}
        >
          {icon}
        </Pressable>
      </View>
      <Text
        style={[
          styles.text,
          name === "phone-outline" && { paddingRight: 55 },
          name === "chatbox-outline" && { paddingLeft: 15 },
        ]}
      >{`${coins} ${!isNaN(coins) ? ` coins` : ``}`}</Text>
    </View>
  );
};

export default ActionButton;
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 10,
    color: Colors.primary600,
    fontWeight: "bold",
    fontSize: 20,
  },
  imgContainer: {
    marginRight: 20,
    marginTop: 30,
    overflow: "hidden",
    // borderRadius: 300,
  },
  img: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "grey",
    overflow: "hidden",
    backgroundColor: Colors.primary500,
  },
});

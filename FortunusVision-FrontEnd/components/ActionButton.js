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
const ActionButton = ({ icon, style, coins, name }) => {
  return (
    <View>
      <View
        style={[
          styles.imgContainer,
          (name !== "phone-outline") & (name !== "chatbox-outline")
            ? {
                borderRadius: 8,
              }
            : {},
        ]}
      >
        <Pressable
          android_ripple={{ color: "#640233" }}
          style={[styles.img, style]}
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
    color: "white",
    fontSize: 20,
  },
  imgContainer: {
    marginRight: 20,
    marginTop: 30,
    overflow: "hidden",
    borderRadius: 100,
  },
  img: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "grey",
    overflow: "hidden",
    backgroundColor: Colors.accent500,
  },
});

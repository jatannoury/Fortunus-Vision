import { Ionicons } from "@expo/vector-icons";
import React from "react";
import RechargeCoinsScreen from "../screens/RechargeCoinsScreen";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/colors";
const ActionButton = ({
  icon,
  icon1,
  icon2,
  style,
  coins,
  name,
  stopRecording,
  fct,
  startRecording,
  recording,
}) => {
  return (
    <View>
      <View style={[styles.imgContainer]}>
        <Pressable
          android_ripple={{ color: Colors.primary600 }}
          style={[styles.img, style]}
          onPress={
            name === "recording"
              ? recording
                ? stopRecording
                : startRecording
              : fct
          }
        >
          {icon ? icon : recording ? icon1 : icon2}
        </Pressable>
      </View>
      <Text style={[styles.text]}>
        {coins && `${coins} ${!isNaN(coins) ? `coins` : ``}`}
      </Text>
    </View>
  );
};

export default ActionButton;
const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    color: Colors.primary600,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  imgContainer: {
    marginTop: 30,
    marginHorizontal: 30,
  },

  img: {
    width: 105,
    marginRight: 0,
    height: 105,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "grey",
    overflow: "hidden",
    backgroundColor: Colors.primary500,
  },
});

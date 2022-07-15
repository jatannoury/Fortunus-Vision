import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const UserVoiceContainer = ({ props }) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.date}>
          Today, 10:22 am <Text style={styles.name}> {`${props.name} `} </Text>
        </Text>
      </View>
      <View style={styles.voiceContainer}>
        <FontAwesome
          name="play"
          size={30}
          color="#D9D9D9"
          style={styles.playButton}
        />
      </View>
    </View>
  );
};

export default UserVoiceContainer;
const styles = StyleSheet.create({
  textContainer: {
    alignItems: "flex-end",
  },
  date: {
    color: Colors.secondary500,
  },
  name: {
    color: Colors.primary700,
  },
  voiceContainer: {
    height: 69,
    width: 323,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: Colors.primary700,
    marginTop: 8,
  },
  playButton: {
    marginHorizontal: 10,
  },
});

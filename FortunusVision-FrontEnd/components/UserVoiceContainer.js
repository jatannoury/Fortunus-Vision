import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const UserVoiceContainer = ({ props, date, time, name }) => {
  return (
    <View style={styles.userContainer}>
      <View>
        <Text style={styles.date}>
          {date}, {time} <Text style={styles.name}> {`${name} `} </Text>
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
  userContainer: {
    alignItems: "flex-end",
    marginHorizontal: 15,
  },

  date: {
    color: Colors.secondary500,
    fontSize: 10,
  },
  name: {
    color: Colors.primary600,
    fontSize: 15,
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

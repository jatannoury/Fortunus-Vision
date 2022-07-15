import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const ExpertVoiceContainer = ({ props, date, time }) => {
  return (
    <View style={styles.expertContainer}>
      <Text style={styles.name}>
        {`${props.name} `}{" "}
        <Text style={styles.date}>
          {time}, {date}
        </Text>
      </Text>
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

export default ExpertVoiceContainer;
const styles = StyleSheet.create({
  name: {
    fontSize: 15,
    color: Colors.accent600,
  },
  date: {
    fontSize: 10,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  voiceContainer: {
    backgroundColor: Colors.accent600,
    height: 69,
    width: 323,
    borderRadius: 10,
    marginTop: 8,
    justifyContent: "center",
  },
  expertContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  playButton: {
    marginHorizontal: 10,
  },
});

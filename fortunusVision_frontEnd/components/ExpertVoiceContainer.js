import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const ExpertVoiceContainer = ({ sound, date, time, props }) => {
  const name = useSelector((state) => state.user);
  const soundObject = new Audio.Sound();
  async function load() {
    await soundObject.loadAsync({ uri: sound });
  }
  load();

  const [pressed, isPressed] = useState(false);
  return (
    <View style={styles.expertContainer}>
      <Text style={styles.name}>
        {`${props} `}{" "}
        <Text style={styles.date}>
          {time}, {date}
        </Text>
      </Text>
      <View style={styles.voiceContainer}>
        {!pressed ? (
          <FontAwesome
            name="play"
            size={30}
            color="#D9D9D9"
            style={styles.playButton}
            onPress={async () => {
              // The rest of this plays the audio
              try {
                await soundObject.playAsync();
                isPressed(true);
              } catch (error) {
                console.log("error:", error);
              }
            }}
          />
        ) : (
          <AntDesign
            name="pause"
            size={30}
            color="#D9D9D9"
            onPress={async () => {
              const status = await soundObject.pauseAsync();
              isPressed(false);
            }}
          />
        )}
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
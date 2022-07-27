import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { Audio } from "expo-av";
const UserVoiceContainer = ({ sound, date, time, name, userType }) => {
  const soundObject = new Audio.Sound();
  console.log(userType);
  async function load() {
    await soundObject.loadAsync({ uri: sound });
  }
  load();

  const [pressed, isPressed] = useState(false);
  return (
    <View style={styles.userContainer}>
      <View>
        <Text style={styles.date}>
          {date}, {time} <Text style={styles.name}> {`${name} `} </Text>
        </Text>
      </View>
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

export default UserVoiceContainer;
const styles = StyleSheet.create({
  userContainer: {
    alignItems: "flex-end",
    marginHorizontal: 15,
    marginVertical: 15,
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

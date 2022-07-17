import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Audio } from "expo-av";
import ActionButton from "./ActionButton";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const VoiceButton = () => {
  const [recording, setRecording] = useState();

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording");
    }
  }

  return (
    <>
      <View styel={styles.container}>
        <ActionButton
          icon1={<AntDesign name="pause" size={70} color="black" />}
          icon2={<FontAwesome name="microphone" size={70} color="black" />}
          stopRecording={stopRecording}
          startRecording={startRecording}
          recording={recording}
          name="recording"
          style={{ alignItems: "center", justifyContent: "center" }}
        />
      </View>
    </>
  );
};

export default VoiceButton;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {},
});

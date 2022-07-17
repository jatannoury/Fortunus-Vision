import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Audio } from "expo-av";
import ActionButton from "./ActionButton";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const VoiceButton = () => {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [played, setIsPlayed] = useState(false);
  const [soundStatus, setSoundStatus] = useState(false);
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

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let updatedRecordings = [];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      status: status,
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });
    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      setIsPlayed(false);
      recordings[0].sound.stopAsync();
    }
  };

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      recordingLine.sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1}-{recordingLine.duration}
          </Text>
          {!played && (
            <AntDesign
              name="playcircleo"
              size={35}
              color="black"
              onPress={async () => {
                const status = await recordingLine.sound.playAsync();
                setSoundStatus(status);
                setIsPlayed(true);
              }}
            />
          )}

          {played && (
            <AntDesign
              name="pause"
              size={35}
              color="black"
              onPress={async () => {
                const status = await recordingLine.sound.pauseAsync();
                setSoundStatus(status);
                setIsPlayed(false);
              }}
            />
          )}
        </View>
      );
    });
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
      {getRecordingLines()}
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

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Audio } from "expo-av";
import ActionButton from "./ActionButton";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { storeVoice } from "../utils/firebase";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
const { StorageAccessFramework } = FileSystem;

const VoiceButton = ({ expert_id }) => {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [played, setIsPlayed] = useState(false);
  const [displayedDurr, setDisplayedDurr] = useState(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (typeof recordings[0] === "object") {
      setDisplayedDurr(recordings[0].duration);
      setDuration(formatedToMillis(recordings[0].duration));
    }
  }, [recordings]);
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
  function formatedToMillis(format) {
    const splitted = format.split(":");
    return splitted[0] * 60000 + splitted[1] * 1000;
  }

  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      setIsPlayed(false);
      recordings[0].sound.stopAsync();
      setDisplayedDurr(0);
    } else {
      setDisplayedDurr(
        getDurationFormatted(duration - playbackStatus.positionMillis)
      );
    }
  };

  async function getUriToBase64(uri) {
    const base64String = await readFile(uri, "base64");
    console.log(base64String);
    return base64String;
  }
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      recordingLine.sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1}-{displayedDurr}
          </Text>
          <View style={styles.row}>
            <Ionicons
              name="send"
              size={35}
              color="black"
              style={{ marginHorizontal: 10 }}
              onPress={async () => {
                FileSystem.readAsStringAsync(recordingLine.file, {
                  encoding: FileSystem.EncodingType.Base64,
                }).then((data) =>
                  storeVoice(
                    {
                      sound: data,
                      usertype: 0,
                      date: new Date(Date.now()),
                      duration: recordingLine.duration,
                    },
                    expert_id
                  )
                );
              }}
            />
            <AntDesign
              name="delete"
              size={35}
              color="black"
              style={{ marginHorizontal: 10 }}
              onPress={() => {
                setRecordings([]);
                recordingLine.sound.pauseAsync();
                setIsPlayed(false);
              }}
            />
            {!played && (
              <AntDesign
                name="playcircleo"
                size={35}
                color="black"
                style={{ marginHorizontal: 10 }}
                onPress={async () => {
                  const status = await recordingLine.sound.playAsync();
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
                  setIsPlayed(false);
                }}
              />
            )}
          </View>
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
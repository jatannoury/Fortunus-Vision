import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { Audio } from "expo-av";
import ActionButton from "./ActionButton";
import { AntDesign, createIconSetFromFontello } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { storeVoice } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addCurrChats, storeVoice as store, addCoins } from "../redux/users";
import { firebase } from "../config";
import Colors from "../constants/colors";
import { updateCoins } from "../utils/http";

const VoiceButton = ({ expert_id, navigation, voicePrice }) => {
  const user_id = useSelector((state) => state.user.userId);
  const coins = useSelector((state) => state.user.coins);
  const userType = useSelector((state) => state.user.userType);
  const curr_chats = useSelector((state) => state.user.curr_chats);
  const userId = useSelector((state) => state.user.userId);

  const upload = async (uri, sound, duration) => {
    console.log("PRICE IS FOUND HERE ->", voicePrice);
    dispatch(addCoins(coins - voicePrice));
    await updateCoins(userId, -voicePrice);
    const filename = uri.substring(uri.lastIndexOf("/") + 1);
    const response = await fetch(uri);
    const blob = await response.blob();
    firebase
      .storage()
      .ref(filename)
      .put(blob)
      .then(async (snapshot) => {
        const res = await snapshot.ref.getDownloadURL();
        setUrl(res);
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();

        const dateString =
          currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
        // "27-11-2020"
        const currTime = currentDate.toLocaleTimeString();
        if (res) {
          const sentVoice = {
            sound: res,
            usertype: userType,
            time: currTime,
            date: dateString,
            duration: duration,
          };
          // dispatch(store(sentVoice));
          dispatch(addCurrChats([...curr_chats, sentVoice]));
          storeVoice(sentVoice, user_id, expert_id, userType);
          storeVoice(sentVoice, expert_id, user_id, userType);
          setRecordings([]);
        }
      });
  };

  const dispatch = useDispatch();
  const [url, setUrl] = useState();
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
    if (coins < voicePrice && userType === 0) {
      navigation.navigate("Recharge");
      return;
    }
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

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      recordingLine.sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording -{displayedDurr}</Text>
          <View style={styles.row}>
            <Ionicons
              name="send"
              size={35}
              color="black"
              style={{ marginHorizontal: 10 }}
              onPress={async () => {
                Alert.alert(
                  `This Action Will Cost You ${voicePrice} coins`,
                  "Do you Want To Succeed?",
                  [
                    {
                      text: "No",
                      onPress: () => "Cancel Pressed",
                      style: "cancel",
                    },
                    {
                      text: "Yes",
                      onPress: async () =>
                        await upload(
                          recordingLine.file,
                          recordingLine.sound,
                          recordingLine.duration
                        ),
                    },
                  ]
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
          icon1={<AntDesign name="pause" size={50} color={Colors.primary600} />}
          icon2={
            <FontAwesome
              name="microphone"
              size={50}
              color={Colors.primary600}
            />
          }
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

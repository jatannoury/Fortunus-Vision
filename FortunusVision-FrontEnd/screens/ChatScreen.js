import { TabRouter } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
import { FontAwesome } from "@expo/vector-icons";
import ExpertVoiceContainer from "../components/ExpertVoiceContainer";

const ChatScreen = ({ navigation, route }) => {
  const props = route.params.props;
  let expertName = useEffect(() => {
    console.log(route.params.props.name);
    navigation.setOptions({
      title: props.name,
    });
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <ExpertVoiceContainer props={props} />
    </ImageBackground>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
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

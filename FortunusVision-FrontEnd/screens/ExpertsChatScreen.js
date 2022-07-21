import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import ChatsCard from "../components/ChatsCard";
const ExpertsChatScreen = () => {
  function switchScreen(props) {
    navigation.navigate("Chat", { props });
  }

  const state = useSelector((state) => state.user);

  console.log("STATE", state.chats);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default ExpertsChatScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

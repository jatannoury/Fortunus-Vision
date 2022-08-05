import React from "react";
import ProfilePicture from "../screens/ProfilePicture";
import { StyleSheet, View, Button } from "react-native";
import Colors from "../constants/colors";
import IconButton from "./IconButton";
const ChatPhoto = ({ navigation }) => {
  return (
    <View style={styles.image}>
      <IconButton navigation={navigation} />
      <ProfilePicture head={true} />
    </View>
  );
};

export default ChatPhoto;
const styles = StyleSheet.create({
  image: {
    flexDirection: "row",
  },
});
import React from "react";
import ProfilePicture from "./ProfilePicture";
import { StyleSheet, View, Button } from "react-native";
const ChatPhoto = () => {
  return (
    <View style={styles.image}>
      <Button title="Look Here" />
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

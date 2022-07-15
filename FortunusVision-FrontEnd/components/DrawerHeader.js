import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "../screens/ProfilePicture";
import ChatPhoto from "./ChatPhoto";
const DrawerHeader = () => {
  return (
    <View style={styles.rootContainer}>
      <ProfilePicture head={true} imgStyle={styles.profilePicture} />
    </View>
  );
};

export default DrawerHeader;
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.secondary600,
    width: 260,
    marginLeft: 10,
    borderRadius: 5,
  },
  profilePicture: {
    width: 55,
    height: 55,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.accent500,
    overflow: "hidden",
    marginLeft: 10,
    marginVertical: 10,
  },
});

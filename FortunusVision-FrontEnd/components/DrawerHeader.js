import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "../screens/ProfilePicture";
import ChatPhoto from "./ChatPhoto";
const DrawerHeader = () => {
  return (
    <View style={styles.rootContainer}>
      <ProfilePicture head={true} />
    </View>
  );
};

export default DrawerHeader;
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.secondary600,
    width: 100,
    marginLeft: 20,
  },
});

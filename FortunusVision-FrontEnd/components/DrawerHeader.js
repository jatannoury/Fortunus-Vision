import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "../screens/ProfilePicture";
import ChatPhoto from "./ChatPhoto";
import { FontAwesome5 } from "@expo/vector-icons";
const DrawerHeader = ({ name, coins }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.flex}>
        <ProfilePicture head={true} imgStyle={styles.profilePicture} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerHeader;
const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
  },
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
    marginLeft: 12,
    marginVertical: 12,
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    color: Colors.primary800,
    paddingTop: 10,
    paddingLeft: 5,
  },
  coins: {
    color: Colors.primary800,
    paddingLeft: 5,
  },
});

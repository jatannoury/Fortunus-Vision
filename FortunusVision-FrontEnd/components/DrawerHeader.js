import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "../screens/ProfilePicture";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const DrawerHeader = ({ name }) => {
  const coins = useSelector((state) => state.user.coins);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.flex}>
        <ProfilePicture head={true} imgStyle={styles.profilePicture} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.coins}>
            {`${coins} `}
            <FontAwesome5 name="coins" size={12} color={Colors.primary800} />
          </Text>
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
    width: 260,
    marginLeft: 10,
    borderRadius: 5,
    height: 100,
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
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary800,
    paddingTop: 10,
    paddingLeft: 15,
  },
  coins: {
    color: Colors.primary800,
    paddingLeft: 15,
  },
});

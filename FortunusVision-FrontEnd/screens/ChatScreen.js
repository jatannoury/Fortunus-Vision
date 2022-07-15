import { TabRouter } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
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
      <Text style={styles.name}>
        {`${props.name} `} <Text style={styles.date}>10:22 am, Today</Text>
      </Text>
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
    color: Colors.primary500,
  },
  date: {
    fontSize: 10,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});

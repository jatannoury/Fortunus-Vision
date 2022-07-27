import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
import { Button } from "react-native-web";
import PhoneActions from "../components/PhoneActions";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function GettingCall({ startCall, endCall, name }) {
  const userType = useSelector((state) => state.user.userType);
  const [started, setStarted] = useState(false);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.rootImgContainer}>
        <ProfilePicture
          path={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
          containerStyle={styles.imgContainer}
        />
        <Text style={styles.callerName}>{name}</Text>
        <Text style={styles.callStatus}>Calling...</Text>
      </View>
      <View style={styles.buttonContainer}>
        {
          <PhoneActions
            icon="call"
            color={"green"}
            onPress={startCall}
            style={{ marginRight: 45 }}
          />
        }
        {
          <PhoneActions
            icon="call-end"
            color={"red"}
            onPress={endCall}
            style={{ marginLeft: 45 }}
          />
        }
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imgContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: Colors.primary500,
    overflow: "hidden",
    marginRight: 20,
    marginTop: 30,
  },
  rootImgContainer: {
    alignItems: "center",
  },
  callerName: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  callStatus: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 350,
  },
});

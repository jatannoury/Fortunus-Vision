import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

import Colors from "../constants/colors";
import ProfilePicture from "./ProfilePicture";
import { Button } from "react-native-web";
import PhoneActions from "../components/PhoneActions";
export default function GettingCall(props) {
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
        <Text style={styles.callerName}>Joseph Tannoury</Text>
        <Text style={styles.callStatus}>Calling...</Text>
      </View>
      <View>
        <PhoneActions
          icon="call"
          color={"green"}
          // onPress={hangup}
          style={{ marginRight: 30 }}
        />
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
});

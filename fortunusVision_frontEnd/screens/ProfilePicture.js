import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
const ProfilePicture = ({ path, containerStyle, imgStyle, head }) => {
  return (
    <View
      style={[
        containerStyle,
        head && {
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 6,
          borderColor: Colors.primary500,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        },
        imgStyle && imgStyle,
      ]}
    >
      <Image
        style={styles.profileImage}
        source={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
      />
    </View>
  );
};

export default ProfilePicture;
const styles = StyleSheet.create({
  profileImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
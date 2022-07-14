import React from "react";
import { Image, StyleSheet, View } from "react-native";
const ProfilePicture = ({ path, containerStyle, imgStyle }) => {
  return (
    <View style={containerStyle}>
      <Image style={imgStyle} source={path} />
    </View>
  );
};

export default ProfilePicture;
const styles = StyleSheet.create({});

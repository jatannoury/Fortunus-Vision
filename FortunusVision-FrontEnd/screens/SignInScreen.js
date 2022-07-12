import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
import React from "react";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
const RechargeCoinsScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.coinsQuantity}>100 coins</Text>
      </View>
    </ImageBackground>
  );
};

export default RechargeCoinsScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.primary700,
    height: 263,
    width: 170,
    alignItems: "center",
  },
  coinsQuantity: {
    color: "white",
    fontSize: 20,
  },
});

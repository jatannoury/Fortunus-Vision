import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
        <Text style={styles.coinsPrice}>10 $</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonContent}>Add to cart</Text>
        </TouchableOpacity>
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
  coinsPrice: {
    fontSize: 70,
    fontWeight: "900",
    color: "white",
  },
  button: {
    width: 40,
  },
  buttonContainer: {
    height: 40,
    width: 145,
    marginTop: 10,
    backgroundColor: Colors.primary500,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    fontSize: 20,
    color: "white",
  },
});

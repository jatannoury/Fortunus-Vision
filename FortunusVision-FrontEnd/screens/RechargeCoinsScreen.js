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
      <Text style={styles.title}>Don't have enough coins?</Text>
      <View style={styles.flexContainer}>
        <View style={styles.container}>
          <Text style={styles.coinsQuantity}>100 coins</Text>
          <Text style={styles.coinsPrice}>10 $</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.premiumCoinsQuantity}>200 coins</Text>
          <Text style={styles.coinsPrice}>15 $</Text>
          <TouchableOpacity style={styles.premiumButtonContainer}>
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.container}>
          <Text style={styles.coinsQuantity}>300 coins</Text>
          <Text style={styles.coinsPrice}>20 $</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.coinsQuantity}>400 coins</Text>
          <Text style={styles.coinsPrice}>25 $</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RechargeCoinsScreen;
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 30,
    fontWeight: "500",
    color: Colors.primary500,
  },
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
    marginTop: 33,
    color: "white",
    fontSize: 20,
  },
  premiumCoinsQuantity: {
    color: "white",
    backgroundColor: "#C16126",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 17,
  },
  premiumButtonContainer: {
    height: 40,
    width: 145,
    marginTop: 10,
    backgroundColor: "#C16126",
    justifyContent: "center",
    alignItems: "center",
  },
  coinsPrice: {
    fontSize: 70,
    fontWeight: "900",
    color: "white",
    marginVertical: 20,
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
  flexContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

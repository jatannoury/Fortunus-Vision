import React from "react";
import bundles from "../constants/bundles";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../constants/colors";
import { updateCoins } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { addCoins } from "../redux/users";

const RechargeCoinsScreen = ({ navigation }) => {
  let userCoins = useSelector((state) => state.user.coins);
  let userId = useSelector((state) => state.user.userId);
  let dispatch = useDispatch();
  async function update(addedCoins, userId) {
    console.log(addedCoins, userId);
    let res = await updateCoins(userId, addedCoins);
    console.log(res);

    if (res.message === "Success") {
      dispatch(addCoins(userCoins + addedCoins));
      Alert.alert(
        "Success",
        `Your new balance is ${userCoins + addedCoins} coins`
      );

      navigation.goBack();
    } else {
      Alert.alert("error");
    }
  }
  const OfferOne = bundles.offerOne;
  const OfferTwo = bundles.offerTwo;
  const OfferThree = bundles.offerThree;
  const OfferFour = bundles.offerFour;
  const coins = useSelector((state) => state.user.coins);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.title}>Don't have enough coins?</Text>
      <View style={styles.flexContainer}>
        <View style={styles.container}>
          <Text style={styles.coinsQuantity}>{OfferOne.coinsNumber} coins</Text>
          <Text style={styles.coinsPrice}>
            {OfferOne.coinsPrice} {OfferOne.currency}
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={update.bind("this", OfferOne.coinsNumber, userId)}
          >
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.premiumCoinsQuantity}>
            {OfferTwo.coinsNumber} coins
          </Text>
          <Text style={styles.coinsPrice}>
            {OfferTwo.coinsPrice} {OfferTwo.currency}
          </Text>
          <TouchableOpacity
            style={styles.premiumButtonContainer}
            onPress={update.bind("this", OfferTwo.coinsNumber, userId)}
          >
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.container}>
          <Text style={styles.coinsQuantity}>
            {OfferThree.coinsNumber} coins
          </Text>
          <Text style={styles.coinsPrice}>
            {OfferThree.coinsPrice} {OfferThree.currency}
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={update.bind(this, OfferThree.coinsNumber, userId)}
          >
            <Text style={styles.buttonContent}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.coinsQuantity}>
            {OfferFour.coinsNumber} coins
          </Text>
          <Text style={styles.coinsPrice}>
            {OfferFour.coinsPrice} {OfferFour.currency}
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={update.bind("this", OfferFour.coinsNumber, userId)}
          >
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
    backgroundColor: Colors.accent500,
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

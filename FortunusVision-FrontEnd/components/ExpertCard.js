import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import Colors from "../constants/colors";
const ExpertCard = ({ name, years, age, rating, price, phonePrice }) => {
  return (
    <EmptyCard>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <Text style={styles.infoContainer}>{years} years of experience</Text>
        <Text style={styles.infoContainerOne}>{age} Years Old</Text>
        <Text style={styles.infoContainerTwo}>
          {rating} <Ionicons name="star" />
        </Text>
      </View>
      <View>
        <Image
          source={require("../assets/Container.jpg")}
          style={styles.priceContainer}
        ></Image>
        <Text
          style={[
            styles.phonePrice,
            phonePrice.length === 2 && { left: 665 },
            phonePrice.length === 1 && { left: 670 },
          ]}
        >
          {phonePrice}$
        </Text>
        <Image
          source={require("../assets/Container.jpg")}
          style={styles.PhonepriceContainer}
        ></Image>
        <Text
          style={[
            styles.price,
            price.length === 2 && { left: 660 },
            price.length === 1 && { left: 670 },
          ]}
        >
          {price}$
        </Text>
      </View>
    </EmptyCard>
  );
};

export default ExpertCard;
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 10,
  },
  textContainer: {
    position: "absolute",
    top: 80,
    left: 435,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 200,
  },
  infoContainer: {
    position: "absolute",
    top: 135,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  infoContainerOne: {
    position: "absolute",
    top: 155,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  infoContainerTwo: {
    position: "absolute",
    top: 175,
    left: 435,
    fontSize: 15,
    color: "white",
  },
  priceContainer: {
    position: "absolute",
    top: 60,
    left: 640,
    flex: 1,
  },
  phonePrice: {
    position: "absolute",
    top: 72,
    left: 652,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  PhonepriceContainer: {
    position: "absolute",
    top: 120,
    left: 640,
    flex: 1,
  },
  price: {
    position: "absolute",
    top: 135,
    left: 652,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});

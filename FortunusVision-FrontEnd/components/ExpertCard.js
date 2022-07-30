import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import Colors from "../constants/colors";
import ProfilePicture from "../screens/ProfilePicture";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const ExpertCard = ({ name, years, age, rating, price, phonePrice, pic }) => {
  let path = { pic: pic };
  return (
    <EmptyCard>
      <View>
        <ProfilePicture path={path.pic} containerStyle={styles.imgContainer} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textPrice}>{price}</Text>
          <FontAwesome5
            name="microphone"
            size={24}
            color={Colors.primary600}
            style={styles.microphone}
          />
        </View>
        <View style={[styles.box, { bottom: 18 }]}>
          <Text style={styles.textPrice}>{phonePrice}</Text>
          <FontAwesome
            name="phone"
            size={24}
            color={Colors.primary600}
            style={[styles.microphone, { bottom: 23 }]}
          />
        </View>
        <Text style={styles.infoContainer}>{years} years of experience</Text>
        <Text style={styles.infoContainerOne}>{age} Years Old</Text>
        <Text style={styles.infoContainerTwo}>
          {rating} <Ionicons name="star" />
        </Text>
      </View>
      <View>
        <Image source={path.pic} style={styles.PhonepriceContainer}></Image>
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
    color: Colors.primary600,
    paddingBottom: 2,
  },
  textContainer: {
    position: "absolute",
    top: 50,
    left: 200,
    borderBottomColor: Colors.primary600,
    borderBottomWidth: 1,
    width: 240,
  },
  infoContainer: {
    position: "absolute",
    top: 95,
    left: 200,
    fontSize: 15,
    color: Colors.primary600,
  },
  infoContainerOne: {
    position: "absolute",
    top: 115,
    left: 200,
    fontSize: 15,
    color: Colors.primary600,
  },
  infoContainerTwo: {
    position: "absolute",
    top: 135,
    left: 200,
    fontSize: 15,
    color: Colors.primary600,
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
    color: Colors.primary600,
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
    color: Colors.primary600,
  },
  imgContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.primary600,
    overflow: "hidden",
    position: "relative",
    top: 70,
    left: 100,
  },
  box: {
    borderWidth: 3,
    borderColor: Colors.primary600,
    width: 55,
    position: "relative",
    left: 385,
    bottom: 35,
    borderRadius: 5,
    height: 30,
  },
  textPrice: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: Colors.primary600,
  },
  microphone: {
    position: "relative",
    bottom: 25,
    right: 25,
  },
});

import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import { MaterialIcons } from "@expo/vector-icons";
const AppointmentCard = ({ name, price, waiting }) => {
  return (
    <View>
      <EmptyCard>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <MaterialIcons
          name="phone-in-talk"
          size={35}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.phoneInfo}>10min Call</Text>
        <Text style={styles.time}>
          {waiting && "Approx Waiting Time:{waiting} Minutes"}
        </Text>
        <Image
          source={require("../assets/Container.jpg")}
          style={styles.priceContainer}
        ></Image>
        <Text
          style={[
            styles.prices,
            price.length == 2 && { left: 665 },
            price.length == 1 && { left: 670 },
          ]}
        >
          {price}$
        </Text>
      </EmptyCard>
    </View>
  );
};

export default AppointmentCard;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
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
  icon: {
    position: "absolute",
    top: 140,
    left: 435,
  },
  phoneInfo: {
    position: "absolute",
    top: 152,
    left: 480,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    position: "absolute",
    top: 190,
    left: 560,
    color: "white",
    fontSize: 10,
  },
  priceContainer: {
    position: "absolute",
    top: 60,
    left: 640,
    flex: 1,
  },
  prices: {
    position: "absolute",
    top: 72,
    left: 652,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});

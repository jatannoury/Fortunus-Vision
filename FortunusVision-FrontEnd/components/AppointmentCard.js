import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import Colors from "../constants/colors";
import ProfilePicture from "../screens/ProfilePicture";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const AppointmentCard = ({
  name,
  years,
  age,
  rating,
  price,
  waiting,
  icon,
}) => {
  return (
    <EmptyCard>
      <View>
        <ProfilePicture
          path={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
          containerStyle={styles.imgContainer}
        />
        <View style={styles.textContainer}>
          {icon ? (
            <Feather
              name="check-circle"
              size={15}
              color="green"
              style={styles.done}
            />
          ) : (
            <MaterialIcons
              name="pending-actions"
              size={18}
              color="orange"
              style={styles.done}
            />
          )}
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textPrice}>{`${price} coins`}</Text>
          {icon ? (
            <FontAwesome5
              name="microphone"
              size={24}
              color={Colors.primary600}
              style={styles.microphone}
            />
          ) : (
            <FontAwesome
              name="phone"
              size={24}
              color={Colors.primary600}
              style={[styles.microphone, { bottom: 23 }]}
            />
          )}
        </View>

        <Text style={styles.description}>{`${
          icon ? "Voice Message" : `${waiting} hours left`
        }`}</Text>
      </View>

      <View>
        <Image
          source={require("../assets/Container.jpg")}
          style={styles.priceContainer}
        ></Image>
      </View>
    </EmptyCard>
  );
};

export default AppointmentCard;
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
    width: 110,
  },

  priceContainer: {
    position: "absolute",
    top: 60,
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
    width: 100,
    position: "relative",
    left: 340,
    bottom: 15,
    borderRadius: 5,
    height: 50,
  },
  textPrice: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "800",
    color: Colors.primary600,
  },
  microphone: {
    position: "relative",
    bottom: 25,
    right: 25,
  },
  description: {
    color: Colors.primary600,
    position: "relative",
    left: 200,
    bottom: 30,
    fontSize: 16,
  },
  done: {
    position: "relative",
    top: 90,
    left: 230,
  },
  time: {
    position: "absolute",
    top: 50,
    left: 150,
    color: "white",
    fontSize: 10000,
  },
});
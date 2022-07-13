import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import EmptyCard from "../components/EmptyCard";
import AppointmentCard from "../components/AppointmentCard";
import { MaterialIcons } from "@expo/vector-icons";
import ExpertCard from "../components/ExpertCard";
const AppointmentScreen = ({ navigation }) => {
  let item = [
    {
      name: "Jamil",
      waiting: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      waiting: "6",
    },
    {
      name: "Toni",
      waiting: "5",
      price: "50",
      age: "22",
      rating: "3.5",
      phonePrice: "8",
      waiting: "14",
    },
    {
      name: "Joseph",
      waiting: "7",
      price: "70",
      age: "22",
      rating: "5.0",
      phonePrice: "7",
      waiting: "24",
    },
    {
      name: "Stephanelle",
      waiting: "4",
      price: "55",
      age: "25",
      rating: "2.5",
      phonePrice: "23",
      waiting: "55",
    },
    {
      name: "Hamz",
      waiting: "6",
      price: "520",
      age: "32",
      rating: "4.5",
      phonePrice: "120",
      waiting: "10",
    },
    {
      name: "Mo Tahan",
      waiting: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      waiting: "100",
    },
  ];
  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      waiting: itemData.waiting,
      name: itemData.name,
      age: itemData.age,
      years: itemData.years,
      rating: itemData.rating,
      phonePrice: itemData.phonePrice,
      price: itemData.price,
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
    };
    console.log(CardItemProps);
    return (
      <View style={styles.buttonOuter}>
        <Pressable
          android_ripple={{ color: "red" }}
          style={styles.buttonInner}
          // onPress={navigate.bind(this, CardItemProps)}
        >
          <AppointmentCard navigation={navigation} {...CardItemProps} />
        </Pressable>
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View>
        <FlatList renderItem={renderCardItem} data={item} />
      </View>
    </ImageBackground>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  buttonInner: {
    overflow: "hidden",
  },
  buttonOuter: {
    overflow: "hidden",
  },
});

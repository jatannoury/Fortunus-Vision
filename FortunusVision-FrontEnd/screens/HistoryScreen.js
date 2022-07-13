import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { ImageBackground } from "react-native";
import AppointmentCard from "../components/AppointmentCard";

const HistoryScreen = ({ navigation }) => {
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
      name: itemData.name,
      price: itemData.price,
      icon: "check",
    };
    console.log(CardItemProps);
    return (
      <View style={styles.buttonOuter}>
        <Pressable
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

export default HistoryScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  buttonOuter: {},
});

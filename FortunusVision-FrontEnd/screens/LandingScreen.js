import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import ExpertCard from "../components/ExpertCard";
import Colors from "../constants/colors";
const LandingScreen = ({ navigation }) => {
  let item = [
    {
      name: "Jamil",
      years: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
    },
    {
      name: "Toni",
      years: "5",
      price: "50",
      age: "22",
      rating: "3.5",
      phonePrice: "8",
    },
    {
      name: "Joseph",
      years: "7",
      price: "70",
      age: "22",
      rating: "5.0",
      phonePrice: "7",
    },
    {
      name: "Stephanelle",
      years: "4",
      price: "55",
      age: "25",
      rating: "2.5",
      phonePrice: "23",
    },
    {
      name: "Hamz",
      years: "6",
      price: "520",
      age: "32",
      rating: "4.5",
      phonePrice: "120",
    },
    {
      name: "Mo Tahan",
      years: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
    },
  ];
  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      name: itemData.name,
      age: itemData.age,
      years: itemData.years,
      rating: itemData.rating,
      phonePrice: itemData.phonePrice,
      price: itemData.price,
    };
    return (
      <Pressable>
        <ExpertCard navigation={navigation} {...CardItemProps} />
      </Pressable>
    );
  }
  return (
    <View>
      <FlatList renderItem={renderCardItem} data={item} />
    </View>
  );
};

export default LandingScreen;

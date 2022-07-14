import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/colors";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ExpertCard from "../components/ExpertCard";
const LandingScreen = ({ navigation }) => {
  function navigate(props) {
    navigation.navigate("ExpertPage", { props });
  }
  let item = [
    {
      name: "Jamil",
      years: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      name: "Toni",
      years: "5",
      price: "50",
      age: "22",
      rating: "3.5",
      phonePrice: "8",
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      name: "Joseph",
      years: "7",
      price: "70",
      age: "22",
      rating: "5.0",
      phonePrice: "7",
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      name: "Stephanelle",
      years: "4",
      price: "55",
      age: "25",
      rating: "2.5",
      phonePrice: "23",
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      name: "Hamz",
      years: "6",
      price: "520",
      age: "32",
      rating: "4.5",
      phonePrice: "120",
      quote:
        "The distance between an honest Christian mystic and a fortune-teller is sometimes less than half a whisper. Less than a pot of tea or the space between two book covers.",
    },
    {
      name: "Mo Tahan",
      years: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
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
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
    };
    return (
      <View style={styles.buttonOuter}>
        <TouchableOpacity onPress={navigate.bind(this, CardItemProps)}>
          <ExpertCard navigation={navigation} {...CardItemProps} />
        </TouchableOpacity>
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

export default LandingScreen;
const styles = StyleSheet.create({
  buttonInner: {
    overflow: "hidden",
  },
  buttonOuter: {
    overflow: "hidden",
  },
});

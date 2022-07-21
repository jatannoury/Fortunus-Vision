import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useSelector } from "react-redux";
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
  const experts = useSelector((state) => state.user.experts);
  let item = experts;

  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      name: itemData.userName,
      age: itemData.age,
      years: itemData.years_of_experience,
      rating: itemData.rating,
      phonePrice: itemData.phone_price,
      price: itemData.voice_price,
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
      id: itemData.expert_id,
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

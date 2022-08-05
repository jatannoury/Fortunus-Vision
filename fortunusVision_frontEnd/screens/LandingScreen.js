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
      rating:
        itemData.rating.NbOfVotes == 0
          ? "0"
          : (itemData.rating.rating / itemData.rating.NbofVotes).toFixed(2),
      phonePrice: itemData.phone_price,
      price: itemData.voice_price,
      quote:itemData.Quote,
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
  image:{
    flex:1
 },
  buttonInner: {
    overflow: "hidden",
  },
  buttonOuter: {
    overflow: "hidden",
  },
});
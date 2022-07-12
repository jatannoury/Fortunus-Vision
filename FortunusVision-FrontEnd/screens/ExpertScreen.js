import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

const ExpertScreen = ({ navigation, route }) => {
  const params = route.params.props;
  const name = params.name;
  const years = params.years;
  const rating = params.rating;
  const phonePrice = params.phonePrice;
  const price = params.price;
  const quote = params.quote;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default ExpertScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import AppointmentCard from "../components/AppointmentCard";
import { getHistory } from "../utils/http";
import { useState } from "react";

const HistoryScreen = ({ navigation }) => {
  const userId = useSelector((state) => state.user.userId);
  const callsHistory = useSelector((state) => state.user.callsHistory);

  let item = callsHistory;
  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      name: itemData.name,
      price: itemData.price,
      icon: "check",
    };
    return (
      <View style={styles.buttonOuter}>
        <Pressable style={styles.buttonInner}>
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
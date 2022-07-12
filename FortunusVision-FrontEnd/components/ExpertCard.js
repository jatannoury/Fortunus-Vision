import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import Colors from "../constants/colors";
const ExpertCard = () => {
  return (
    <EmptyCard>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Jamil</Text>
        </View>
        <Text style={styles.infoContainer}>10 years of experience</Text>
        <Text style={styles.infoContainerOne}>85 Years Old</Text>
        <Text style={styles.infoContainerTwo}>
          4.5 <Ionicons name="star" />
        </Text>
      </View>
      <View>
        <Image
          source={require("../assets/Container.jpg")}
          style={styles.priceContainer}
        ></Image>
        <Text style={[styles.price]}>100$</Text>
      </View>
    </EmptyCard>
  );
};

export default ExpertCard;

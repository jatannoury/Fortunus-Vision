import React from "react";
import { View, StyleSheet, Text } from "react-native";
import EmptyCard from "../components/EmptyCard";
import Colors from "../constants/colors";
const UsersDatesAndTimes = () => {
  return (
    <View>
      <View style={styles.flex}>
        <EmptyCard style={styles.container} card={styles.card}>
          <Text style={styles.text}> Choose from the below</Text>
        </EmptyCard>
      </View>
    </View>
  );
};

export default UsersDatesAndTimes;
const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "130%",
    alignItems: "center",
    position: "relative",
  },
  container: {
    height: 600,
    borderRadius: 25,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginVertical: 20,
    fontWeight: "bold",
    color: Colors.primary600,
  },

  flex: {
    flexDirection: "row",
    marginVertical: 15,
  },
});

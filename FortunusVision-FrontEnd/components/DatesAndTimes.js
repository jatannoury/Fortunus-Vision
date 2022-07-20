import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import EmptyCard from "./EmptyCard";
const DatesAndTimes = () => {
  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    for (let i = 0; i < dates.length; i++) {
      dates[i] = dates[i].toString().split(" ")[2];
    }
    return dates;
  }

  // 👇️ all days of the current month

  let date = new Date("2022-02-01");
  console.log(getAllDaysInMonth(date.getFullYear(), date.getMonth()));
  return (
    <View style={styles.flex}>
      <EmptyCard style={styles.container} card={styles.card}>
        <Text style={styles.text}> Choose from the below</Text>
      </EmptyCard>
    </View>
  );
};

export default DatesAndTimes;
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
});

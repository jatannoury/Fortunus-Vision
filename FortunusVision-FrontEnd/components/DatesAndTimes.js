import React from "react";
import { View, StyleSheet, Text } from "react-native";
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

  let date = new Date();
  console.log(getAllDaysInMonth(date.getFullYear(), date.getMonth()));
  return (
    <View style={styles.flex}>
      <EmptyCard
        style={{
          height: 500,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
        card={{
          height: "100%",
          width: "130%",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}> Choose from the below</Text>
      </EmptyCard>
    </View>
  );
};

export default DatesAndTimes;
const styles = StyleSheet.create({});

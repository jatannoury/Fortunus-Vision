import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Colors from "../constants/colors";
import DayContainer from "./DayContainer";
import EmptyCard from "./EmptyCard";
const DatesAndTimes = ({ day }) => {
  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    for (let i = 0; i < dates.length; i++) {
      dates[i] = {
        date: parseInt(dates[i].toString().split(" ")[2]),
      };
    }

    return dates;
  }

  let date = new Date();
  let currMonthDates = getAllDaysInMonth(date.getFullYear(), date.getMonth());

  console.log(currMonthDates);

  return (
    <View style={styles.flex}>
      <EmptyCard style={styles.container} card={styles.card}>
        <Text style={styles.text}> Choose from the below</Text>
        <View style={styles.flex}>
          {currMonthDates.map((e, index) => {
            if (index > 4) return;
            return <DayContainer day={e.date} key={e.date} />;
          })}
        </View>
        <View style={styles.flex}>
          {currMonthDates.map((e, index) => {
            if (index < 5 || index > 9) return;
            return <DayContainer day={e.date} key={e.date} />;
          })}
        </View>
        <View style={styles.flex}>
          {currMonthDates.map((e, index) => {
            if (index < 10 || index > 14) return;
            return <DayContainer day={e.date} key={e.date} />;
          })}
        </View>
        <View style={styles.flex}>
          {currMonthDates.map((e, index) => {
            if (index < 15 || index > 19) return;
            return <DayContainer day={e.date} key={e.date} />;
          })}
        </View>
        <View style={styles.flex}>
          {currMonthDates.map((e, index) => {
            if (index < 20 || index > 24) return;
            return <DayContainer day={e.date} key={e.date} />;
          })}
        </View>
        <View style={styles.flex}>
          {currMonthDates.map((e, index) => {
            if (index < 25 || index > 30) return;
            return <DayContainer day={e.date} key={e.date} />;
          })}
        </View>
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

  flex: {
    flexDirection: "row",
    marginVertical: 15,
  },
});

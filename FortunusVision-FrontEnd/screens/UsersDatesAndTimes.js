import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import DayContainer from "../components/DayContainer";
import EmptyCard from "../components/EmptyCard";
import DayDisplay from "../components/DayDisplay";
import Colors from "../constants/colors";
import { getAppointment } from "../utils/http";
const UsersDatesAndTimes = ({ expert_id }) => {
  const [availabality, setAvailabiliy] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      console.log(expert_id);
      let res = await getAppointment(expert_id);
      setAvailabiliy(res);
    }
    fetchAppointments();
  }, []);

  return (
    <View>
      <View style={styles.flex}>
        <EmptyCard style={styles.container} card={styles.card}>
          <Text style={styles.text}> Choose from the below</Text>
          <DayDisplay availabality={availabality} />
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

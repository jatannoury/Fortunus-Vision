import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import DayContainer from "../components/DayContainer";
import EmptyCard from "../components/EmptyCard";
import DayDisplay from "../components/DayDisplay";
import Colors from "../constants/colors";
import { getAppointment } from "../utils/http";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HoursDisplay from "../components/HoursDisplay";
import { quickSort } from "../helperFunctions/quickSort";
import HoursContainer from "../components/HoursContainer";
const UsersDatesAndTimes = ({ expert_id }) => {
  const [availabality, setAvailabiliy] = useState([]);
  const [dayIsClicked, setDayIsClicked] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  useEffect(() => {
    async function fetchAppointments() {
      let res = await getAppointment(expert_id);
      setAvailabiliy(res);
    }
    fetchAppointments();
  }, []);


  function getTime(day) {
    for (let i = 0; i < availabality.length; i++) {
      if (availabality[i].day === day) {
        return availabality[i];
      }
    }
  }

  return (
    <View>
      <View style={styles.flex}>
        <EmptyCard style={styles.container} card={styles.card}>
          {availabality.length !== 0 ? (
            <>
              <Text style={styles.text}> Choose from the below</Text>
              <DayDisplay
                availabality={availabality}
                setDayIsClicked={setDayIsClicked}
                dayIsClicked={dayIsClicked}
                setSelectedDay={setSelectedDay}
              />
            </>
          ) : (
            <>
              <Text style={styles.Alert}>No Time Slots Available !</Text>
              <MaterialCommunityIcons
                name="emoticon-sad-outline"
                size={260}
                color={Colors.accent600}
                style={{ marginTop: 30, marginLeft: 10 }}
              />
            </>
          )}
          <ScrollView>
            {selectedDay !== "" &&
              getTime(selectedDay).time.map((item, index) => {
                return (
                  <HoursContainer
                    item={item}
                    selectedDay={selectedDay}
                    availabality={availabality}
                    setSelectedHour={setSelectedHour}
                  />
                );
              })}
          </ScrollView>
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
  Alert: {
    marginTop: 140,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.accent600,
  },
});
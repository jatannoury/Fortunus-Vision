import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import SubmitButt from "./SubmitButt";
import DayDisplay from "./DayDisplay";
import Colors from "../constants/colors";
import {
  getAppointment,
  setAppointment,
  updateAppointment,
} from "../utils/http";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux/es/exports";
import HoursContainer from "./HoursContainer";
import EmptyCard from "./EmptyCard";
const UsersDatesAndTimes = ({ expert_id, user_id, navigation }) => {
  const [availabality, setAvailabiliy] = useState([]);
  const [dayIsClicked, setDayIsClicked] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [isSelected, setIsSelected] = useState("");

  useEffect(() => {
    async function fetchAppointments() {
      let res = await getAppointment(expert_id);
      setAvailabiliy(res);
    }
    fetchAppointments();
  }, []);

  async function submitHandler() {
    await setAppointment(expert_id, user_id, selectedDay, selectedHour);
    console.log(expert_id, user_id, selectedDay, selectedHour);
    Alert.alert("Submitted", "Your calendar has been updated");
    //get the selected day object
    let filteredAppointment = availabality.filter(
      (item) => item === getTime(selectedDay)
    );
    updateAppointment(expert_id, selectedHour, filteredAppointment[0]);
    navigation.goBack();
  }

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
                    setIsSelected={setIsSelected}
                    isSelected={isSelected}
                  />
                );
              })}
          </ScrollView>
        </EmptyCard>
      </View>
      {isSelected !== "" && <SubmitButt fct={submitHandler} />}
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

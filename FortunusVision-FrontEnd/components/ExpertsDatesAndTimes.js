import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/colors";
import { addAppointment } from "../utils/http";
import DayContainer from "./DayContainer";
import EmptyCard from "./EmptyCard";
import HoursDisplay from "./HoursDisplay";
import SubmitButt from "./SubmitButt";
const ExpertsDatesAndTimes = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [hours, setHours] = useState("");
  const [isHours, setIsHours] = useState(false);
  const [subHours, setSubHours] = useState([]);
  const [dayIsClicked, setDayIsClicked] = useState(false);
  const userId = useSelector((state) => state.user.userId);

  function submitHandler() {
    console.log(selectedDay, hours, subHours);
    console.log(userId);
    addAppointment(userId, selectedDay, subHours);
    setSelectedDay("");
    setHours("");
    setSubHours([]);
    Alert.alert("Submitted", "Your calendar has been updated");
  }

  function getAllDaysInMonth(year, month, subhours) {
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
  useEffect(() => {
    if (dayIsClicked === false) {
      setSelectedDay("");
      setHours("");
      setSubHours([]);
      setIsHours(false);
    }
  }, [dayIsClicked]);
  return (
    <View>
      <View style={styles.flex}>
        <EmptyCard style={styles.container} card={styles.card}>
          <Text style={styles.text}> Choose from the below</Text>
          <View style={styles.flex}>
            {currMonthDates.map((e, index) => {
              if (index > 4) return;
              return (
                <DayContainer
                  dayIsClicked={dayIsClicked}
                  setDayIsClicked={setDayIsClicked}
                  setSelectedDay={setSelectedDay}
                  day={e.date}
                  key={e.date}
                />
              );
            })}
          </View>
          <View style={styles.flex}>
            {currMonthDates.map((e, index) => {
              if (index < 5 || index > 9) return;
              return (
                <DayContainer
                  dayIsClicked={dayIsClicked}
                  setDayIsClicked={setDayIsClicked}
                  setSelectedDay={setSelectedDay}
                  day={e.date}
                  key={e.date}
                />
              );
            })}
          </View>
          <View style={styles.flex}>
            {currMonthDates.map((e, index) => {
              if (index < 10 || index > 14) return;
              return (
                <DayContainer
                  dayIsClicked={dayIsClicked}
                  setDayIsClicked={setDayIsClicked}
                  setSelectedDay={setSelectedDay}
                  day={e.date}
                  key={e.date}
                />
              );
            })}
          </View>
          <View style={styles.flex}>
            {currMonthDates.map((e, index) => {
              if (index < 15 || index > 19) return;
              return (
                <DayContainer
                  dayIsClicked={dayIsClicked}
                  setDayIsClicked={setDayIsClicked}
                  setSelectedDay={setSelectedDay}
                  day={e.date}
                  key={e.date}
                />
              );
            })}
          </View>
          <View style={styles.flex}>
            {currMonthDates.map((e, index) => {
              if (index < 20 || index > 24) return;
              return (
                <DayContainer
                  dayIsClicked={dayIsClicked}
                  setDayIsClicked={setDayIsClicked}
                  setSelectedDay={setSelectedDay}
                  day={e.date}
                  key={e.date}
                />
              );
            })}
          </View>
          <View style={styles.flex}>
            {currMonthDates.map((e, index) => {
              if (index < 25 || index > 29) return;
              return (
                <DayContainer
                  dayIsClicked={dayIsClicked}
                  setDayIsClicked={setDayIsClicked}
                  setSelectedDay={setSelectedDay}
                  day={e.date}
                  key={index}
                />
              );
            })}
          </View>
          {dayIsClicked && (
            <HoursDisplay
              isSubhours={false}
              setHours={setHours}
              setIsHours={setIsHours}
              isHours={isHours}
            />
          )}
          {(isHours && dayIsClicked) === true && (
            <HoursDisplay
              isSubhours={true}
              selectedHour={hours}
              setSubHours={setSubHours}
              selectedSubHours={subHours}
            />
          )}
        </EmptyCard>
      </View>
      {subHours.length !== 0 && <SubmitButt fct={submitHandler} />}
    </View>
  );
};

export default ExpertsDatesAndTimes;
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

import React, { useState } from "react";
import { ScrollView } from "react-native";
import DayContainer from "./DayContainer";
const DayDisplay = ({
  availabality,
  setDayIsClicked,
  dayIsClicked,
  setSelectedDay,
}) => {
  return (
    <ScrollView horizontal={true} style={{ width: "70%" }}>
      {availabality.map((hour, index) => {
        return (
          <DayContainer
            setSelectedDay={setSelectedDay}
            setDayIsClicked={setDayIsClicked}
            dayIsClicked={dayIsClicked}
            day={hour.day}
            style={{
              height: 50,
              width: 70,
              borderRadius: 10,
              marginBottom: 20,
            }}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

export default DayDisplay;
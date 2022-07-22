import React from "react";
import { ScrollView } from "react-native";
import DayContainer from "./DayContainer";
const DayDisplay = ({ availabality }) => {
  return (
    <ScrollView horizontal={true}>
      {availabality.map((hour, index) => {
        console.log(hour.day);
        return (
          <DayContainer
            day={hour.day}
            style={{ height: 50, width: 70, marginVertical: 30 }}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

export default DayDisplay;

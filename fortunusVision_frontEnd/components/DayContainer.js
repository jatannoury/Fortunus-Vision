import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import Colors from "../constants/colors";
const DayContainer = ({
  day,
  style,
  setSelectedDay,
  setDayIsClicked,
  dayIsClicked,
}) => {
  const [displayed, setIsDisplayed] = useState(false);
  const [isClickable,setIsClickable]=useState(true)
  useEffect(()=>{
    if(day<new Date().getDay())setIsClickable(false)
  },[])
  return (
    <View style={styles.dayContainer}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={[
          styles.press,
          displayed && { backgroundColor: "#fcf2d8" },
          style,
          !isClickable&&{backgroundColor:Colors.primary700}
        ]}
        onPress={() => {
          if(!isClickable){
            alert("Please Choose From The Upcoming Days")
            return
          }
          setSelectedDay(day);
          setIsDisplayed(!displayed);
          setDayIsClicked(!dayIsClicked);
        }}
      >
        <Text style={style && { fontSize: 30, fontWeight: "bold" }}>{day}</Text>
      </Pressable>
    </View>
  );
};

export default DayContainer;
const styles = StyleSheet.create({
  press: {
    backgroundColor: Colors.primary600,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  dayContainer: {
    borderRadius: 5,

    marginHorizontal: 10,
    overflow: "hidden",
  },
});
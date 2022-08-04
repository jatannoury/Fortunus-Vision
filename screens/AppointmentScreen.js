import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ImageBackground,
  StyleSheet,
  View,
  Pressable,
  FlatList,
  Text,
} from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import { getExpertsById } from "../utils/http";
const AppointmentScreen = ({ navigation }) => {
  const [expertsInfo, setExpertsInfo] = useState([]);
  const [renderInfo, setRenderInfo] = useState([]);
  const appointments = useSelector((state) => state.user.appointments);
  const [item, setItem] = useState();
  function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
  useEffect(() => {
    async function fetchInfo() {
      let fetchedData = [];
      for (let i = 0; i < appointments.length; i++) {
        let res = await getExpertsById(appointments[i].expert_id);
        let hour =
          appointments[i].date.time.slice(-2) === "PM"
            ? parseInt(appointments[i].date.time) + 12
            : parseInt(appointments[i].date.time);
        let minutes = parseInt(
          appointments[i].date.time.split(":")[1].substring(0, 2)
        );
        let time =
          new Date().getTime() -
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            parseInt(appointments[i].date.day),
            hour,
            minutes
          ).getTime();
        let manipulatedData = {
          name: res.userName,
          price: res.info.phone_price,
          age: res.info.age,
          rating: res.info.rating,
          waiting: convertMsToHM(time),
        };
        fetchedData.push(manipulatedData);
      }
      setItem(fetchedData);
    }
    fetchInfo();
  }, [appointments]);

  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      waiting: itemData.waiting,
      name: itemData.name,
      age: itemData.age,
      years: itemData.years,
      rating: itemData.rating,
      phonePrice: itemData.phonePrice,
      price: itemData.price,
    };
    return (
      <View style={styles.buttonOuter}>
        <Pressable
          style={styles.buttonInner}
          // onPress={navigate.bind(this, CardItemProps)}
        >
          <AppointmentCard navigation={navigation} {...CardItemProps} />
        </Pressable>
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      {item && <FlatList renderItem={renderCardItem} data={item} />}
    </ImageBackground>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  buttonInner: {
    overflow: "hidden",
  },
  buttonOuter: {
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
});
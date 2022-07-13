import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import EmptyCard from "../components/EmptyCard";
import AppointmentCard from "../components/AppointmentCard";
import { MaterialIcons } from "@expo/vector-icons";
const AppointmentScreen = () => {
  let item = [
    {
      name: "Jamil",
      waiting: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      name: "Toni",
      waiting: "5",
      price: "50",
      age: "22",
      rating: "3.5",
      phonePrice: "8",
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      name: "Joseph",
      waiting: "7",
      price: "70",
      age: "22",
      rating: "5.0",
      phonePrice: "7",
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      name: "Stephanelle",
      waiting: "4",
      price: "55",
      age: "25",
      rating: "2.5",
      phonePrice: "23",
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      name: "Hamz",
      waiting: "6",
      price: "520",
      age: "32",
      rating: "4.5",
      phonePrice: "120",
      quote:
        "The distance between an honest Christian mystic and a fortune-teller is sometimes less than half a whisper. Less than a pot of tea or the space between two book covers.",
    },
    {
      name: "Mo Tahan",
      waiting: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
    },
  ];
  return <AppointmentCard name="Joseph" price="50" waiting="99" />;
};

export default AppointmentScreen;

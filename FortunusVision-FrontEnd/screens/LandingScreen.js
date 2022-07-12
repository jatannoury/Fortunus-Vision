import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import ExpertCard from "../components/ExpertCard";
import Colors from "../constants/colors";
const LandingScreen = () => {
  let item = [
    {
      phonePrice: 30,
      voicePrice: 12,
      id: 1,
      name: "John Doe",
      age: 27,
      years: 10,
      rating: 4.5,
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
    },
    {
      phonePrice: 34,
      voicePrice: 4,
      id: 2,
      name: "Joseph Tannoury",
      age: 22,
      years: 8,
      rating: 3.2,
      quote:
        "The distance between an honest Christian mystic and a fortune-teller is sometimes less than half a whisper. Less than a pot of tea or the space between two book covers.",
    },
    {
      phonePrice: 25,
      voicePrice: 5,
      id: 3,
      name: "Stephanelle Rachwan",
      age: 27,
      years: 1,
      rating: 0.2,
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      phonePrice: 69,
      voicePrice: 8,
      id: 4,
      name: "Stephaneeeelllle Rachwan",
      age: 17,
      years: 1.5,
      rating: 2.2,
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      phonePrice: 45,
      voicePrice: 7,
      id: 5,
      name: "Stephaneeeelllle Rachwan",
      age: 17,
      years: 1.5,
      rating: 2.2,
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      phonePrice: 26,
      voicePrice: 8,
      id: 6,
      name: "Stephaneeeelllle Raaaaaachwaaaaan",
      age: 17,
      years: 1.5,
      rating: 2.2,
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
  ];
  return (
    <ExpertCard name="Jamil" years="10" price="100" age="35" rating="4.5" />
  );
};

export default LandingScreen;

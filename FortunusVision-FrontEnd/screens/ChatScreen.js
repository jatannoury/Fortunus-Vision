import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/colors";
import ExpertVoiceContainer from "../components/ExpertVoiceContainer";
import UserVoiceContainer from "../components/UserVoiceContainer";
const ChatScreen = ({ navigation, route }) => {
  let item = [
    {
      name: "Jamil",
      years: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      name: "Toni",
      years: "5",
      price: "50",
      age: "22",
      rating: "3.5",
      phonePrice: "8",
      quote:
        "She doesn't think it's a good idea to know the future, because you can hardly ever change it, so why suffer twice?",
    },
    {
      name: "Joseph",
      years: "7",
      price: "70",
      age: "22",
      rating: "5.0",
      phonePrice: "7",
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      name: "Stephanelle",
      years: "4",
      price: "55",
      age: "25",
      rating: "2.5",
      phonePrice: "23",
      quote:
        "Fear is dangerous, not the tarot. The tarot represents the spectrum of the human condition, the good, the evil, the light, and the dark. Do not fear the darker aspects of the human condition. Understand them. ",
    },
    {
      name: "Hamz",
      years: "6",
      price: "520",
      age: "32",
      rating: "4.5",
      phonePrice: "120",
      quote:
        "The distance between an honest Christian mystic and a fortune-teller is sometimes less than half a whisper. Less than a pot of tea or the space between two book covers.",
    },
    {
      name: "Mo Tahan",
      years: "10",
      price: "100",
      age: "35",
      rating: "4.5",
      phonePrice: "50",
      quote:
        "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
    },
  ];
  const props = route.params.props;
  let expertName = useEffect(() => {
    console.log(route.params.props.name);
    navigation.setOptions({
      title: props.name,
    });
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <ExpertVoiceContainer props={props} />
      <UserVoiceContainer props={props} />
      <ExpertVoiceContainer props={props} />
      <UserVoiceContainer props={props} />
      <ExpertVoiceContainer props={props} />
      <UserVoiceContainer props={props} />
      <ExpertVoiceContainer props={props} />
      <UserVoiceContainer props={props} />
    </ImageBackground>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    color: Colors.accent600,
  },
  date: {
    fontSize: 10,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  voiceContainer: {
    backgroundColor: Colors.accent600,
    height: 69,
    width: 323,
    borderRadius: 10,
    marginTop: 8,
    justifyContent: "center",
  },
  expertContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  playButton: {
    marginHorizontal: 10,
  },
});

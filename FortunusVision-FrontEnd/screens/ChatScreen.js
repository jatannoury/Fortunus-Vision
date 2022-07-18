import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/colors";
import ExpertVoiceContainer from "../components/ExpertVoiceContainer";
import UserVoiceContainer from "../components/UserVoiceContainer";
import VoiceButton from "../components/VocieButton";
const ChatScreen = ({ navigation, route }) => {
  const props = route.params.props;
  useEffect(() => {
    navigation.setOptions({
      title: props.name,
    });
  }, []);

  const chats = useSelector((state) => state.user.chats);
  let currChat = chats.filter((chat) => chat.name === props.name);
  const expert_id = currChat[0].expert_id;
  let item = [
    {
      name: "Joseph Tannoury",
      usertype: "0",
      Date: "April 22",
      Time: "10:00 am",
    },
    {
      name: props.name,
      usertype: "1",
      Date: "April 22",
      Time: "10:20 am",
    },
    {
      name: "Joseph Tannoury",
      usertype: "0",
      Date: "April 22",
      Time: "10:25 am",
    },
    {
      name: "Joseph Tannoury",
      usertype: "0",
      Date: "April 22",
      Time: "10:26 am",
    },
    {
      name: "Joseph Tannoury",
      usertype: "0",
      Date: "April 22",
      Time: "10:27 am",
    },
    {
      name: props.name,
      usertype: "1",
      Date: "April 22",
      Time: "1:00 pm",
    },
    {
      name: "Joseph Tannoury",
      usertype: "0",
      Date: "April 22",
      Time: "1:32 pm",
    },
    {
      name: "Joseph Tannoury",
      usertype: "0",
      Date: "April 22",
      Time: "1:33 pm",
    },
  ];

  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      name: itemData.name,
      date: itemData.Date,
      time: itemData.Time,
    };
    if (itemData.usertype === "0") {
      return (
        <View style={styles.buttonOuter}>
          <UserVoiceContainer {...CardItemProps} props={props} />
        </View>
      );
    }
    return (
      <View style={styles.buttonOuter}>
        <ExpertVoiceContainer props={props} {...CardItemProps} />
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <FlatList renderItem={renderCardItem} data={item} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.primary700,
        }}
      >
        <VoiceButton expert_id={expert_id} />
      </View>
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

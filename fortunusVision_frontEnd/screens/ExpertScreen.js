import React, { useEffect, useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import ActionButton from "../components/ActionButton";
import { Ionicons } from "@expo/vector-icons";
import ProfilePicture from "./ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { addChat, triggerCall, updateCoins } from "../utils/http";
import { addCoins } from "../redux/users";
import { addChats } from "../redux/users";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { Color } from "react-native-agora";
const ExpertScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const params = route.params.props;
  const expertName = params.name;
  const years = params.years;
  const rating = params.rating;
  const phonePrice = params.phonePrice;
  const price = params.price;
  const quote = params.quote;
  const expert_id = params.id;
  const [index, setIndex] = useState();
  const userName = useSelector((state) => state.user.name);
  const experts = useSelector((state) => state.user.experts);
  const userId = useSelector((state) => state.user.userId);
  const chats = useSelector((state) => state.user.chats);
  const coins = useSelector((state) => state.user.coins);
  const name = useSelector((state) => state.user.name);
  useEffect(() => {
    experts.map((item, index) => {
      if (item.expert_id === expert_id) {
        setIndex(index);
        console.log(index);
      }
    });
  }, []);
  function gotoCallingScreen() {
    Alert.alert(
      `This Action Will Cost You ${phonePrice} coins`,
      "Do you Want To Succeed?",
      [
        {
          text: "No",
          onPress: () => "Cancel Pressed",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            await updateCoins(userId, -phonePrice);
            await triggerCall(expert_id, name, 1);
            dispatch(addCoins(coins - phonePrice));

            navigation.navigate("Agora", {
              expertName,
              phonePrice,
              expert_id,
              index,
            });
          },
        },
      ]
    );
  }

  useEffect(() => {
    navigation.setOptions({
      title: expertName,
    });
  }, []);
  function switchScreen(name, props) {
    if (name === "Chat") {
      for (let i = 0; i < chats.length; i++) {
        if (chats[i].expert_id === expert_id) {
          navigation.navigate(name, { props });
          return;
        }
      }
      dispatch(
        addChats({
          _id: userId,
          expert_id: expert_id,
          id: `${userId}/${expert_id}`,
          name: expertName,
          voicePrice: price,
          price: price,
          user_id: userId,
        })
      );
      addChat(
        userId,
        expert_id,
        price,
        expertName,
        `${userId}/${expert_id}`,
        userName
      );
    }
    navigation.navigate(name, { props, expert_id });
  }

  function checkCoins(method, coins, price) {
    if (method === "Call" && coins < price) {
      navigation.navigate("Recharge");
    } else if (method === "Call" && coins >= price) {
      gotoCallingScreen();
    }
    if (method === "Voice") {
      switchScreen("Chat", [expertName, expert_id, price]);
    }
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <ProfilePicture
          path={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
          containerStyle={styles.imgContainer}
        />
        <Title label={expertName} style={styles.title} />
        <Title
          label={`${years} ${
            years < 2 ? `Year Of Experience` : `Years Of Experience`
          }`}
          style={styles.Experience}
        />
        <Title
          label={rating}
          style={styles.rating}
          icon={<Ionicons name="star" size={22} />}
        />
        <Title label={quote} style={styles.quote} />
        <View style={styles.contain}>
          <ActionButton
            icon={
              <Ionicons
                name="call-outline"
                size={60}
                color={Colors.primary600}
              />
            }
            style={styles.leftContainer}
            coins={phonePrice}
            fct={() => {
              checkCoins("Call", coins, phonePrice);
            }}
          />

          <ActionButton
            icon={
              <Ionicons
                name="chatbox-outline"
                size={60}
                color={Colors.primary600}
              />
            }
            style={styles.rightContainer}
            coins={price}
            fct={() => {
              checkCoins("Voice", coins, price);
            }}
          />
        </View>
        <ActionButton
          icon={
            <Ionicons
              name="calendar-outline"
              size={80}
              color={Colors.primary600}
            />
          }
          style={styles.box}
          coins={"Book An Appointment"}
          fct={switchScreen.bind(this, "Booking")}
        />
      </View>
    </ImageBackground>
  );
};

export default ExpertScreen;
const styles = StyleSheet.create({
  box: {
    width: 280,
    height: 122,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: Colors.primary500,
    overflow: "hidden",
    marginRight: 20,
    marginTop: 20,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  title: {
    paddingRight: 20,
    fontSize: 40,
    paddingTop: 10,
  },
  quote: {
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "normal",
    color: Colors.primary600,
    marginHorizontal: 20,
    paddingTop: 15,
  },
  leftContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contain: {
    flexDirection: "row",
  },
  Experience: {
    fontSize: 25,
    paddingTop: 10,
    paddingRight: 20,
    fontWeight: "500",
  },
  rating: {
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 20,
    fontWeight: "500",
  },
});
import React, { useEffect } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import ActionButton from "../components/ActionButton";
import { Ionicons } from "@expo/vector-icons";
import ProfilePicture from "./ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/http";
import { addChats } from "../redux/users";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
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
  const userName = useSelector((state) => state.user.name);
  const userId = useSelector((state) => state.user.userId);
  const chats = useSelector((state) => state.user.chats);
  const coins = useSelector((state) => state.user.coins);
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
    console.log(method, coins, price);
    if (method === "Call" && coins < price) {
      navigation.navigate("Recharge");
    } else if (method === "Call" && coins >= price) {
      alert("Allowed");
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
          style={{ fontSize: 30, paddingTop: 10, paddingRight: 20 }}
        />
        <Title
          label={rating}
          style={{ fontSize: 25, paddingTop: 10, paddingRight: 20 }}
          icon={<Ionicons name="star" size={22} />}
        />
        <Title label={quote} style={styles.quote} />
        <View style={styles.contain}>
          <ActionButton
            icon={
              <Ionicons name="call-outline" size={80} style={styles.phone} />
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
                size={80}
                style={styles.message}
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
            <Ionicons name="calendar-outline" size={80} style={styles.book} />
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
    marginRight: 20,
    paddingLeft: 10,
    paddingTop: 5,
  },
  rightContainer: {
    marginLeft: 20,
    paddingLeft: 10,
    paddingTop: 5,
  },
  contain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import ActionButton from "../components/ActionButton";
import { Ionicons } from "@expo/vector-icons";
const ExpertScreen = ({ navigation, route }) => {
  const params = route.params.props;
  const name = params.name;
  const years = params.years;
  const rating = params.rating;
  const phonePrice = params.phonePrice;
  const price = params.price;
  const quote = params.quote;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.profileImage}
            source={require("../assets/PERSONAL_PROFILE_PIC.jpg")}
          />
        </View>
        <Title label={name} style={styles.title} />
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
            name={"phone-outline"}
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
            name={"chatbox-outline"}
          />
        </View>
        <ActionButton
          icon={
            <Ionicons name="calendar-outline" size={80} style={styles.book} />
          }
          style={styles.box}
          coins={"Book An Appointment"}
          navigation={navigation}
          screenName={"Booking"}
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

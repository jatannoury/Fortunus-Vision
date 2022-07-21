import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import { getExperts, getExpertsById, signUserIn } from "../utils/http";
import Colors from "../constants/colors";
import Title from "../components/Title";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import SignUpLink from "../components/SignUpLink";
import { useSelector, useDispatch } from "react-redux";
import {
  addCoins,
  addName,
  addExperts,
  addChats,
  addUserId,
} from "../redux/users";

const SignInScreen = ({ navigation }) => {
  function switchCurrent() {
    navigation.navigate("SignUP");
  }
  const dispatch = useDispatch();
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
  });

  function InputChangedHandlers(inputIdentifier, enteredValue) {
    setInputVals((currInput) => {
      return {
        ...currInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  function saveInputHandler() {
    const submitted = {
      email: inputVals.email,
      password: inputVals.password,
    };
    setInputVals((currInput) => {
      return {
        password: currInput.password,
        email: currInput.email,
      };
    });
  }
  const [switchScreen, setSwitch] = useState(false);

  function switchScreenHandler(screen) {
    saveInputHandler();
    async function signIn() {
      const response = await signUserIn(inputVals.email, inputVals.password);
      if (response.err || response.user_type === 1) {
        Alert.alert("Wrong credentials", "Please check your inputs");
      } else {
        dispatch(addCoins(response.coins));
        dispatch(addName(response.userName));
        dispatch(addUserId(response.user_id));
        async function fetchExperts() {
          let manipulatedData = [];
          const response = await getExperts(1);
          response.map((item) => {
            let obj = item.info;
            obj.userName = item.userName;
            obj.expert_id = item._id;
            manipulatedData.push(obj);
          });
          dispatch(addExperts(manipulatedData));
        }
        fetchExperts();

        async function fetchChats() {
          let allExperts = [];
          response.chats.map((item) => {
            async function getEachExpert() {
              let sub_response = await getExpertsById(item.expert_id);
              let manipulatedData = {
                ...item,
                voicePrice: sub_response.info.voice_price,
                name: sub_response.userName,
              };
              dispatch(addChats(manipulatedData));
            }
            getEachExpert();
          });
        }
        fetchChats();

        setSwitch(true);
        setTimeout(() => {
          setSwitch(false);
          navigation.navigate(screen);
        }, 200);
      }
    }
    signIn();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar style="light" backgroundColor={Colors.primary500} />
        <Title label="Fortunus Vision" style={{ fontSize: 50 }} />
        <SignInForm InputChangedHandlers={InputChangedHandlers} />
        <Button
          label={"Login Now"}
          icon={
            <Feather name="arrow-right-circle" size={20} style={styles.icon} />
          }
          style={{ marginHorizontal: 20, marginTop: 150 }}
          onPress={switchScreenHandler.bind(this, "LandingPage")}
        />
        <View style={styles.socialMedia}>
          <Button
            label={"Facebook"}
            facebook={styles.facebook}
            FbIcon={<Zocial name="facebook" size={22} />}
            style={{ borderBottomLeftRadius: 30, borderTopLeftRadius: 30 }}
          />

          <Button
            label={"Google+"}
            facebook={styles.google}
            FbIcon={<FontAwesome5 name="google" size={22} />}
            style={{ borderTopRightRadius: 30, borderBottomRightRadius: 30 }}
          />
        </View>
        <SignUpLink onPress={switchCurrent} navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  icon: {
    color: "#ccc",
    marginTop: 50,
  },
  facebook: {
    backgroundColor: "#3C4EB2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
  },
  google: {
    backgroundColor: "#E2412C",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
  },
  socialMedia: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import Colors from "./constants/colors";
import { Feather } from "@expo/vector-icons";
import Title from "./components/Title";
import SignIn from "./screens/SignIn";
import Input from "./components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar backgroundColor={Colors.primary500} />
        <Title label="Register" />
        <View style={styles.form}>
          <Input label={"E-mail"} />
          <Input label={"Username"} />
          <Input label={"Password"} />
          <Input label={"Confirm Password"} />
        </View>
        <View style={styles.buttonOuter}>
          <Pressable
            style={styles.buttonInner}
            android_ripple={{ color: Colors.primary600 }}
          >
            <Text style={styles.text}>
              Register{"  "}
              <Feather
                name="arrow-right-circle"
                size={20}
                style={styles.icon}
              />
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },

  form: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },

  buttonOuter: {
    marginHorizontal: 30,
    marginTop: 80,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonInner: {
    borderRadius: 30,
    backgroundColor: Colors.primary500,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#201B26",
    textAlign: "center",
  },
  icon: {
    color: "#ccc",
    marginTop: 50,
  },
});

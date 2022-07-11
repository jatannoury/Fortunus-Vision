import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import SignIn from "./screens/SignIn";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <StatusBar backgroundColor="#5B2E0F" />
        <View>
          <Text style={styles.title}>Register</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.name}>E-mail</Text>
          <TextInput
            placeholderTextColor="#ba7f56"
            placeholder="E-mail"
            style={styles.input}
          />
          <Text style={styles.name}>Username</Text>
          <TextInput
            placeholderTextColor="#ba7f56"
            placeholder="Username"
            style={styles.input}
          />
          <Text style={styles.name}>Password</Text>
          <TextInput
            placeholderTextColor="#ba7f56"
            placeholder="Password"
            style={styles.input}
            textContentType="password"
            secureTextEntry={true}
          />
          <Text style={styles.name}>Confirm Password</Text>
          <TextInput
            placeholderTextColor="#ba7f56"
            placeholder="Confirm Password"
            style={styles.input}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonOuter}>
          <Pressable
            style={styles.buttonInner}
            android_ripple={{ color: "#ba7f56" }}
          >
            <Text style={styles.text}>
              Register{" "}
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
  name: {
    marginTop: 50,
    fontSize: 20,
    color: "#5B2E0F",
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 100,
    color: "#5B2E0F",
  },
  form: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
  input: {
    borderBottomColor: "#5B2E0F",
    borderBottomWidth: 3,
    color: "#5B2E0F",
  },
  buttonOuter: {
    marginHorizontal: 30,
    marginTop: 80,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonInner: {
    borderRadius: 30,
    backgroundColor: "#5B2E0F",
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
    color: "white",
    marginTop: 50,
  },
});

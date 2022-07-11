import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

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
          <TextInput placeholder="E-mail" style={styles.input} />
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
  },
  input: {
    borderBottomColor: "#5B2E0F",
    borderBottomWidth: 3,
    textAlign: "center",
    color: "#5B2E0F",
    fontWeight: "bold",
  },
});

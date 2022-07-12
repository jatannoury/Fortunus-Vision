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
import Button from "./components/Button";
import SignUpForm from "./components/SignUpForm";

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
        <SignUpForm />
        <Button
          label={"Register"}
          icon={
            <Feather name="arrow-right-circle" size={20} style={styles.icon} />
          }
        />
        <View>
          <Text style={styles.description}>
            By clicking register, I agree to your{" "}
            <Text style={styles.word}>Terms</Text>
          </Text>
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
  icon: {
    color: "#ccc",
    marginTop: 50,
  },
  word: {
    fontWeight: "900",
    color: Colors.primary500,
    textDecorationLine: "underline",
    lineHeight: 50,
  },
  description: {
    textAlign: "center",
    fontWeight: "500",
    color: Colors.primary500,
  },
});

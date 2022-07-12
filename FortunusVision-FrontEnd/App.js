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
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  return <SignUpScreen />;
}

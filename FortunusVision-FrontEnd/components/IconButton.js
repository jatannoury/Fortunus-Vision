import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const IconButton = () => {
  const navigation = useNavigation();
  function switchScreen() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={switchScreen}>
      <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default IconButton;
const styles = StyleSheet.create({
  buttonContainer: {
    width: 20,
    height: 50,
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
import React from "react";
import { Button } from "react-native";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";

const imagePicker = () => {
  async function pickAnImage() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return <Button title="pressHere" onPress={pickAnImage} />;
};

export default imagePicker;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import ChatsCard from "../components/ChatsCard";

const ChatsScreen = ({ navigation }) => {
  function switchScreen(props) {
    navigation.navigate("Chat", { props });
  }

  const chats = useSelector((state) => state.user.chats);
  const userType = useSelector((state) => state.user.userType);
  let item = chats;

  function renderCardItem(itemData) {
    itemData = itemData.item;

    let CardItemProps = {
      name: itemData.name,
      price: itemData.voicePrice,
      expert_id: itemData.expert_id,
      icon: "check",
    };
    if (userType == 1) {
      CardItemProps.user_id = itemData.user_id;
    }
    return (
      <View style={styles.buttonOuter}>
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={switchScreen.bind(this, [
            CardItemProps.name,
            CardItemProps.expert_id,
            CardItemProps.price,
            CardItemProps.user_id,
          ])}
        >
          <ChatsCard navigation={navigation} {...CardItemProps} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View>
        <FlatList renderItem={renderCardItem} data={item} />
      </View>
    </ImageBackground>
  );
};

export default ChatsScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
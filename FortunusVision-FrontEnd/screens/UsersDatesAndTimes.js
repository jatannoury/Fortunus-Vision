import React from "react";
import { View, StyleSheet, Text } from "react-native";
import EmptyCard from "../components/EmptyCard";
const UsersDatesAndTimes = () => {
  return (
    <View>
      <View style={styles.flex}>
        <EmptyCard style={styles.container} card={styles.card}>
          <Text style={styles.text}> Choose from the below</Text>
        </EmptyCard>
      </View>
    </View>
  );
};

export default UsersDatesAndTimes;
const styles = StyleSheet.create({});

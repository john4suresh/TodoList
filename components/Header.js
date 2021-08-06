import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> TODOS LIST </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#664229",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

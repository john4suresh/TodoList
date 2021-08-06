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
    backgroundColor: "black",
    height: 40,
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

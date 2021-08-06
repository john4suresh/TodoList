import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({
  size = 40,
  title,
  onPress,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      alignItems: "center",
      justifyContent: "center",
      borderColor: "black",
      borderWidth: 2,
    },
    text: { color: "black", fontSize: 24 },
  });

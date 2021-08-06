import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({
  title,
  onPress,
  disabled,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? "#664229" : "#66422980" },
        style,
      ]}
      onPress={onPress}
      disabled={false}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 1,
  },
  text: { color: "#ffffff", fontSize: 24 },
});

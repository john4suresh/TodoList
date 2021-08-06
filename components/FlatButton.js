import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const FlatButton = ({
  size = 40,
  title,
  onPress,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity style={styles1.flatButton} onPress={onPress}>
      <Text style={styles1.flatButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles1 = StyleSheet.create({
  flatButton: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  flatButtonText: {
    fontWeight: 600,
  },
});

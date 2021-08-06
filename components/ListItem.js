import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "./Button";
import { removeTodo } from "../redux/action";
import { connect } from "react-redux";

const ListItem = ({ title, id, removeTodo, subTitle, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.text}>Title : {title}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.text}>Subtitle : {subTitle}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.text}>Description : {description}</Text>
      </View>
      <View>
        <Button
          title="Remove"
          onPress={() => removeTodo(id)}
          style={{ borderColor: "red" }}
          textStyle={{ color: "red" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 4,
    textAlign: "left",
  },
  container: {
    backgroundColor: "gray",
    borderColor: "black",
    borderStyle: "dotted",
    borderWidth: 2,
    margin: 4,
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (item) => dispatch(removeTodo(item)),
  };
};

export default connect(null, mapDispatchToProps)(ListItem);

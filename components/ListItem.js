import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "./Button";
import { removeTodo, editTodo } from "../redux/action";
import { connect } from "react-redux";

const ListItem = ({
  title,
  id,
  removeTodo,
  subTitle,
  description,
  editTodo,
}) => {
  const editButton = () => {
    editTodo({
      title: title,
      subTitle: subTitle,
      description: description,
      id: id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.text}>TITLE : {title}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.text}>SUBTITLE : {subTitle}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.text}>DESCRIPTION : {description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.remove}>
          <Button
            title="Remove"
            onPress={() => removeTodo(id)}
            style={{ borderColor: "red", backgroundColor: "#ffffff" }}
            textStyle={{ color: "red", fontSize: 24 }}
          />
        </View>
        <View style={styles.edit}>
          <Button title="Edit" onPress={editButton} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    borderColor: "black",
    borderStyle: "dotted",
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  listItem: {
    flex: 1,
    padding: 4,
    textAlign: "left",
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  remove: {
    flex: 0.4,
  },
  edit: {
    flex: 0.4,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (item) => dispatch(removeTodo(item)),
    editTodo: (item) => dispatch(editTodo(item)),
  };
};

export default connect(null, mapDispatchToProps)(ListItem);

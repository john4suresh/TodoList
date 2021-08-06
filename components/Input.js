import React, { useState } from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

import { Button } from "./Button";

import { connect } from "react-redux";

import { addTodo } from "../redux/action";

const Input = (props) => {
  const { addTodo } = props;
  const [temp, setTemp] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  const onChangeTextTitle = (text) => {
    setTemp((prevState) => ({ ...prevState, title: text }));
  };
  const onChangeTextSubTitle = (text) => {
    setTemp((prevState) => ({ ...prevState, subTitle: text }));
  };
  const onChangeTextDescription = (text) => {
    setTemp((prevState) => ({ ...prevState, description: text }));
  };

  const addTodoItem = () => {
    if (temp.title) {
      addTodo(temp);
      setTemp({
        title: "",
        subTitle: "",
        description: "",
      });
    }
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={temp.title}
          onChangeText={onChangeTextTitle}
        />
      </View>
      <View style={styles.subTitle}>
        <TextInput
          style={styles.input}
          placeholder="Subtitle"
          value={temp.subTitle}
          onChangeText={onChangeTextSubTitle}
        />
      </View>
      <View style={styles.description}>
        <TextInput
          multiline
          numberOfLines={4}
          style={{ padding: 10, borderWidth: 1 }}
          placeholder="Description"
          value={temp.description}
          onChangeText={onChangeTextDescription}
          editable
          maxLength={225}
        />
      </View>
      <View style={styles.button}>
        <Button title="Add Todo" onPress={addTodoItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
  title: {
    alignSelf: "stretch",
    marginTop: 5,
  },
  subTitle: {
    alignSelf: "stretch",
    marginTop: 5,
  },
  description: {
    alignSelf: "stretch",
    marginTop: 5,
    height: 100,
  },
  button: {
    alignSelf: "stretch",
    marginTop: 5,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
  };
};

export default connect(null, mapDispatchToProps)(Input);

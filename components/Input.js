import React, { useState, useEffect } from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

import { Button } from "./Button";

import { connect } from "react-redux";

import { addTodo } from "../redux/action";

const Input = (props) => {
  const { addTodo, editItem } = props;
  // console.log(editItem);
  const [temp, setTemp] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  useEffect(() => {
    if (editItem) {
      setTemp(editItem);
    }
  }, [editItem]);
  const [error, setError] = useState(false);

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
    if (temp.title && temp.subTitle && temp.description) {
      console.log(temp);
      addTodo(temp);
      setTemp({
        title: "",
        subTitle: "",
        description: "",
      });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorMsg}>
          Please fill the Title, Subtitle and Description
        </Text>
      ) : null}
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
        <Button
          title="Add Todo"
          onPress={addTodoItem}
          disabled={temp.title && temp.subTitle && temp.description}
        />
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
  errorMsg: {
    color: "red",
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

const mapStateToProps = (state) => {
  return {
    editItem: state.todo.edit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

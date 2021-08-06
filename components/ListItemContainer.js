import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";
import { connect } from "react-redux";

const ListItemContainer = (props) => {
  const { todo } = props;

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        id={item.id}
        subTitle={item.subTitle}
        description={item.description}
      />
    );
  };
  return (
    <View style={styles.listContent}>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    flex: 1,
    paddingTop: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    todo: state.todo.todoList,
  };
};

export default connect(mapStateToProps, null)(ListItemContainer);

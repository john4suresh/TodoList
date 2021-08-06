import React from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "./components/Header";

import Input from "./components/Input";

import ListItemContainer from "./components/ListItemContainer";

import store from "./redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Input />
        <ListItemContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 8,
  },
});

export default App;

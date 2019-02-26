import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodos from './containers/VisibleTodos'
import ToggleTodo from './components/ToggleTodo'


class TodoApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
        <View>
          <ToggleTodo />
        </View>
      </View>
    );
  }
}
export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
});
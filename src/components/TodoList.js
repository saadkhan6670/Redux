import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const TodoList = (props) => (

  <View style={{ padding: 20 }}>
    {console.log(props)}
    {props.todos.tmp.map(todo =>
      <TouchableOpacity key={todo.id} onPress={() => props.toggleTodo(todo.id)}>
        <Text style={{
          fontSize: 24,
          textDecorationLine: todo.completed ? 'line-through' : 'none'
        }}>{todo.text}</Text>
      </TouchableOpacity>
    )}
  </View>
)
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
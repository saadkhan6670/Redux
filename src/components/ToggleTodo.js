import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, Button
} from "react-native";
import { connect } from 'react-redux'

class ToggleTodo extends Component {

  render() {
    return (
      <View style={{ padding: 20 }}>
        <View>
          <Button onPress={() => this.props.completed()} title='Completed'></Button>
        </View>
        <View>
          <Button onPress={() => this.props.pending()} title='Pending'></Button>
        </View>
        <View>
          <Button onPress={() => this.props.all()} title='ALL'></Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completed: () => dispatch({ type: "SHOW_COMPLETED" }),
    pending: () => dispatch({ type: "SHOW_PENDING" }),
    all: () => dispatch({ type: "SHOW_ALL" }),
  }
}


export default connect(null, mapDispatchToProps)(ToggleTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


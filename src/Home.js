import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { observer } from "mobx-react";
import { observable, computed, autorun, action } from "mobx";
import Axios from 'axios';
@observer export default class Home extends React.Component {

  @observable value = 1;
  @observable todo = ''

  @computed get computedValue() {
    var total = this.value + this.value
    return total;
  }

  reaction = autorun(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos/${this.value}`)
      .then(response => { this.todo = response.data.title })
  });

  handleRoll = () => {
    this.value = this.value + 1
  }


  render() {
    console.log(this.todo)
    return (
      <View style={styles.container}>
        <Text style={styles.result}>Result: {this.value}</Text>
        <Text style={styles.result}>Todo: {this.todo}</Text>
        <Text style={styles.result}>Computed Result: {this.computedValue}</Text>
        <Button title="change" onPress={this.handleRoll} />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  result: {
    fontSize: 22,
    marginBottom: 10
  }
});
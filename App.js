import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/Home'
import Details from './src/Details'
import TodoApp from './src/TodoApp'
import store from './src/store'
import { Provider } from 'react-redux'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details
  },
  {
    initialRouteName: "Details"
  }
);
let AppContainer = createAppContainer(AppNavigator);
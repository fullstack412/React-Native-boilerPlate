import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
})





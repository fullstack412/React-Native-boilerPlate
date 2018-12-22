// For Android Studio Developers only
import React from 'react';
import {AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
import CourseList from './src/components/CourseList';
import LoginScreen from './src/components/Login/LoginScreen';
import Main from './src/components/Sprints/PreWeek4/Main';

const App = () => (
  // Course List
  <View style = {{flex : 1}}>
  	<Header headerText = {'Backbone Sprint'}/>
  	<CourseList />
  </View>

  // Login Screen
  // <View style = {{flex : 1}}>
  //     <LoginScreen />
  // </View>

  // Individual Sprint
  // <View style = {{ flex : 1 }}>
  //   <Main />
  // </View>

)

AppRegistry.registerComponent('albums', () => App);

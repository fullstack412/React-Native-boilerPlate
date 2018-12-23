// For Android Studio Developers only
import React from 'react';
import {AppRegistry, View, StyleSheet, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Header } from './src/components/common';
// sidebar
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import LoginScreen from './src/components/Login/LoginScreen';
import CourseList from './src/components/Sprints/FullStack/CourseList';
import Prep1 from './src/components/Sprints/PreCourse/PreWeek1/Main';
import Prep2 from './src/components/Sprints/PreCourse/PreWeek2/Main';
import Prep3 from './src/components/Sprints/PreCourse/PreWeek3/Main';
import Prep4 from './src/components/Sprints/PreCourse/PreWeek4/Main';
import DataStructure from './src/components/Sprints/JSSprints/DataStructure/Main';

const AppDrawerNavigator = createDrawerNavigator({
  Full_Stack: CourseList,
  Prep_Course: Prep1,
  JS_Sprints: Prep2,
  Other_Sprints: Prep3,
  FAQ: Prep4,
  Contact: DataStructure,
  Log_In: LoginScreen
})


export default class App extends React.Component {
  render() {
    return (
      // Course List
      // <View style = {{flex : 1}}>
      // 	<Header/>
      // 	<CourseList />
      // </View>

      // Login Screen
      // <View style = {{flex : 1}}>
      //     <LoginScreen />
      // </View>

      // Individual Sprint
      // <View style = {{ flex : 1 }}>
      //   <Main />
      // </View>

      // Side Menu
      <AppDrawerNavigator />     
    )
  }
}

// const App = () => (
  // Course List
  // <View style = {{flex : 1}}>
  // 	<Header headerText = {'Backbone Sprint'}/>
  // 	<CourseList />
  // </View>

  // Login Screen
  // <View style = {{flex : 1}}>
  //     <LoginScreen />
  // </View>

  // Individual Sprint
  // <View style = {{ flex : 1 }}>
  //   <Main />
  // </View>

  // Side Menu
  // <Router />
//   <AppDrawerNavigator />
// )

AppRegistry.registerComponent('albums', () => App);

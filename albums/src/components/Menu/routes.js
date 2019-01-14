import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {AppRegistry, View, Text, StyleSheet, Platform, TouchableOpacity, Image, StatusBar, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PCList from '../Sprints/PreCourse/CourseList';
// import LoginScreen from '../Login/LoginScreen';
import LoginScreen from '../Login/testLogin';
import DrawerScreen from './DrawerScreen';

//PC Week 1 Sprints
import Fundamentals from '../Sprints/PreCourse/PreWeek1/SubSprints/Fundamentals';
import Comparison from '../Sprints/PreCourse/PreWeek1/SubSprints/Comparison';
import Variables from '../Sprints/PreCourse/PreWeek1/SubSprints/Variables';
import WhileLoop from '../Sprints/PreCourse/PreWeek1/SubSprints/WhileLoop';
import ArraysAndForLoop from '../Sprints/PreCourse/PreWeek1/SubSprints/ArraysAndForLoop';
// PC Week 2 Sprints
import Objects from '../Sprints/PreCourse/PreWeek2/SubSprints/Objects';
import DataModeling from '../Sprints/PreCourse/PreWeek2/SubSprints/DataModeling';
import HigherOrderEach from '../Sprints/PreCourse/PreWeek2/SubSprints/HigherOrderEach';
import Map from '../Sprints/PreCourse/PreWeek2/SubSprints/Map';
import Filter from '../Sprints/PreCourse/PreWeek2/SubSprints/Filter'
// PC Week 3 Sprints
import HTMLCSSjQuery from '../Sprints/PreCourse/PreWeek3/SubSprints/HTMLCSSjQuery';
import AbstractClosureDM from '../Sprints/PreCourse/PreWeek3/SubSprints/AbstractClosureDM';
import OOP from '../Sprints/PreCourse/PreWeek3/SubSprints/OOP';
import Reduce from '../Sprints/PreCourse/PreWeek3/SubSprints/Reduce';
// PC Week 4 Sprints
import Git from '../Sprints/PreCourse/PreWeek4/SubSprints/Git';
import Testing from '../Sprints/PreCourse/PreWeek4/SubSprints/Testing';
import WebDev from '../Sprints/PreCourse/PreWeek4/SubSprints/WebDev';

import Quiz from '../Sprints/PreCourse/FinalQuiz'

import Calendar from '../Features/GoogleCalendar/Main';
import Surveys from '../Features/Surveys/Main';
import TownHall from '../Features/TownHall/Main';
import Handbook from '../Features/Handbook';
import FAQ from '../Features/FAQ';
import Contact from '../Features/Contact';


const Tabs = createBottomTabNavigator({
  Home: {
    screen: PCList,
    navigationOptions: {
      title: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          size={17}
          color={tintColor} />
      )
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: "Login",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="login"
          size={17}
          color={tintColor} />
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#000',
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: '#f4428f',
    },
    indicatorStyle: {
      backgroundColor: 'blue',
    },
  }  
});

const DrawerNavigator = createDrawerNavigator({
  Home: Tabs,
  "JavaScript Fundamentals and Functions": Fundamentals,
  "Booleans, Comparisons, and Operators": Comparison,
  "Variables in JavaScript": Variables,
  "While Loop": WhileLoop,
  "Arrays and For Loops": ArraysAndForLoop,
  // Week 2
  "Objects": Objects,
  "Data Modeling": DataModeling,
  "Higher Order Function: Each": HigherOrderEach,
  "Higher Order Function: Map": Map,
  "Higher Order Function: Filter": Filter,
  // Week 3
  "HTML, CSS and jQuery": HTMLCSSjQuery,
  "Closures And Adding Methods": AbstractClosureDM,
  "OOP": OOP,
  "Reduce": Reduce,
  // Week 4
  "Git": Git,
  "Testing": Testing,
  "Web Development": WebDev,
  "Quiz": Quiz,
  Calendar: Calendar,
  Surveys: Surveys,
  TownHall: TownHall,
  Handbook: Handbook,
  Login: LoginScreen
},{
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 200
});

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
    return <Image source={require('../../assets/menu-button.png')}/>
  }else{
    return <Image source={require('../../assets/left-arrow.png')}/>
  }
}

const StackNavigator = createStackNavigator({
    
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    
  DrawerNavigator: DrawerNavigator,
  Home: PCList,
  // Week 1
  "JavaScript Fundamentals and Functions": Fundamentals,
  "Booleans, Comparisons, and Operators": Comparison,
  "Variables in JavaScript": Variables,
  "While Loop": WhileLoop,
  "Arrays and For Loops": ArraysAndForLoop,
  // Week 2
  "Objects": Objects,
  "Data Modeling": DataModeling,
  "Higher Order Function: Each": HigherOrderEach,
  "Higher Order Function: Map": Map,
  "Higher Order Function: Filter": Filter,
  // Week 3
  "HTML, CSS and jQuery": HTMLCSSjQuery,
  "Closures And Adding Methods": AbstractClosureDM,
  "OOP": OOP,
  "Reduce": Reduce,
  // Week 4
  "Git": Git,
  "Testing": Testing,
  "Web Development": WebDev,
  "Quiz": Quiz,
  Calendar: Calendar,
  Surveys: Surveys,
  TownHall: TownHall,
  Handbook: Handbook,
  Login: LoginScreen
},{
  navigationOptions: ({ navigation }) => ({
    title: 'RBK',  // Title to appear in status bar
    headerLeft: 
    <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
      <MenuImage style="styles.bar" navigation={navigation}/>
    </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#f4428f',
    },
    headerRight: (<View />),
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign:"center", 
      flex:1 
    }
  })
});

export default StackNavigator;

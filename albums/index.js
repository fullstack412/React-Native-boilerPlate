// For Android Studio Developers only
import React from 'react';
import {AppRegistry, View, StyleSheet, Text, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { Header } from './src/components/common';
import {createDrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';

import SideMenu from './src/components/Menu/SideMenu'
import LoginScreen from './src/components/Login/LoginScreen';

import FSList from './src/components/Sprints/FullStack/CourseList';
import Recastly from './src/components/Sprints/FullStack/React/Main';
import Angular from './src/components/Sprints/FullStack/Angular/Main';
import Backbone from './src/components/Sprints/FullStack/Backbone/Main';

import JSList from './src/components/Sprints/JSSprints/CourseList';
import JSDataStructure from './src/components/Sprints/JSSprints/DataStructure/Main';

import OSList from './src/components/Sprints/OtherSprints/CourseList';

import PCList from './src/components/Sprints/PreCourse/CourseList';
import PCWeek1 from './src/components/Sprints/PreCourse/PreWeek1/SubSprints/Fundamentals';
import PCWeek2 from './src/components/Sprints/PreCourse/PreWeek2/Main';
import PCWeek3 from './src/components/Sprints/PreCourse/PreWeek3/Main';
import PCWeek4 from './src/components/Sprints/PreCourse/PreWeek4/Main';

import CodeCompiler from './src/components/Features/CodeCompiler/Main';
import Calendar from './src/components/Features/GoogleCalendar/Main';
import Surveys from './src/components/Features/Surveys/Main';
import TownHall from './src/components/Features/TownHall/Main';
import Handbook from './src/components/Features/Handbook';
import FAQ from './src/components/Features/FAQ';
import Contact from './src/components/Features/Contact';

//TODO:Delete later
// import Navigate from '../albums/src/components/Menu/App';

export default class App extends React.Component {
  render() {
    return (
        <AppDrawerNavigator />
        // <AppStackNavigator />     
      // <Navigate />
    )
  }
}

const CustomDrawerComponent = (props) => {
  const { drawerStyle, picStyle } = Styles;
  return (
    <SafeAreaView style = {{ flex: 1}}>
      <View style = { drawerStyle }>
        <Image source = {require('./src/assets/profile1.png')} style = { picStyle } />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
}

// export default createStackNavigator({
const AppStackNavigator = createStackNavigator({
  PCList: PCList,
  PCWeek1: PCWeek1,
  PCWeek2: PCWeek2,
  PCWeek3: PCWeek3,
  PCWeek4: PCWeek4,
  FSList: FSList,
  Recastly: Recastly,
  Angular: Angular,
  Backbone: Backbone,
  JSList: JSList,
  JSDataStructure: JSDataStructure,
  OSList: OSList,
  CodeCompiler: CodeCompiler,
  Calendar: Calendar,
  Surveys: Surveys,
  TownHall: TownHall,
  Handbook: Handbook,
  Header: Header
});

const AppDrawerNavigator = createDrawerNavigator({
  AppStackNavigator: AppStackNavigator,
  Prep_Course_Sprints: PCList,
  Prep_Week_1: PCWeek1,
  Prep_Week_2: PCWeek2,
  Prep_Week_3: PCWeek3,
  Prep_Week_4: PCWeek4,
  Full_Stack_Sprints: FSList,
  JS_Sprints: JSList,
  JSDataStructure: JSDataStructure,
  Other_Sprints: OSList,
  FAQ: FAQ,
  Contact: Contact,
  Log_In: LoginScreen,
  Header: Header
}, {
  contentComponent: SideMenu
});

const Styles = StyleSheet.create({
  drawerStyle: {
    height: 150, 
    backgroundColor: 'pink', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  picStyle: {
    height: 120, 
    width: 120, 
    borderRadius: 60
  }
})

AppRegistry.registerComponent('albums', () => App);

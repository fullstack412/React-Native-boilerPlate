// For Android Studio Developers only
import React from 'react';
import {AppRegistry, View, StyleSheet, Text, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { Header } from './src/components/common';
// sidebar
import SideMenu from './src/components/Menu/SideMenu'
import {createDrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';
import LoginScreen from './src/components/Login/LoginScreen';
import FSList from './src/components/Sprints/FullStack/CourseList';
import JSList from './src/components/Sprints/JSSprints/CourseList';
import OSList from './src/components/Sprints/OtherSprints/CourseList';
import PCList from './src/components/Sprints/PreCourse/CourseList';

import PCWeek1 from './src/components/Sprints/PreCourse/PreWeek1/Main';
import PCWeek2 from './src/components/Sprints/PreCourse/PreWeek2/Main';
import PCWeek3 from './src/components/Sprints/PreCourse/PreWeek3/Main';
import PCWeek4 from './src/components/Sprints/PreCourse/PreWeek4/Main';
import JSDataStructure from './src/components/Sprints/JSSprints/DataStructure/Main';
import FAQ from './src/components/Features/FAQ';
import Contact from './src/components/Features/Contact';

//TODO:Delete later
// import Navigate from '../albums/src/components/Menu/App';

class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />     
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
// // const AppStackNavigator = createStackNavigator({
//   // FSList: FSList,
//   // JSList: JSList,
//   // OSList: OSList,
//   PCList: {
//     screen: PCList
//   },
//   PCWeek1: {
//     screen: PCWeek1
//   }
//   // PCWeek2: PCWeek2,
//   // PCWeek3: PCWeek3,
//   // PCWeek4: PCWeek4,
//   // JSDataStructure: JSDataStructure
// })

const AppDrawerNavigator = createDrawerNavigator({
  Prep_Course: PCList,
  Prep_Week_1: PCWeek1,
  Prep_Week_2: PCWeek2,
  Prep_Week_3: PCWeek3,
  Prep_Week_4: PCWeek4,
  Full_Stack: FSList,
  JS_Sprints: JSList,
  JSDataStructure: JSDataStructure,
  Other_Sprints: OSList,
  FAQ: FAQ,
  Contact: Contact,
  Log_In: LoginScreen
}, {
  contentComponent: SideMenu
})

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

// For Android Studio Developers only
import React from 'react';
import {AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
import CourseList from './src/components/CourseList';
import LoginScreen from './src/components/Login/LoginScreen';

const App = () => (
	// <View style = {{flex : 1}}>
	// 	<Header headerText = {'Backbone Sprint'}/>
	// 	<CourseList />
	// </View>
	<View style = {{flex : 1}}>
		<LoginScreen />
	</View>
)

AppRegistry.registerComponent('albums', () => App);

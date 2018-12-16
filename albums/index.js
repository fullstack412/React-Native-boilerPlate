import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import CourseList from './src/components/CourseList';

const App = () => (
	<View style = {{flex : 1}}>
		<Header headerText = {'Backbone Sprint'}/>
		<CourseList />
	</View>
)
AppRegistry.registerComponent('albums', () => App);
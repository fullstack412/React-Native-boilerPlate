// For Expo developers
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
import CourseList from './src/components/CourseList';
// import LoginScreen from './src/components/Login/LoginScreen';

export default class App extends React.Component {
    render() {
        return (
            <View style = {{flex : 1}}>
                <Header headerText = {'Backbone Sprint'}/>
                <CourseList />
            </View>
        );
    };
}

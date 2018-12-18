import firebase from '@firebase/app';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common/Header';
import LoginForm from './LoginForm';

class LoginScreen extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAvwxCGoh-wVNxvOO5-mHOmyv8S9Efjhk0',
            authDomain: 'remotereview-9a7f7.firebaseapp.com',
            databaseURL: 'https://remotereview-9a7f7.firebaseio.com',
            projectId: 'remotereview-9a7f7',
            storageBucket: 'remotereview-9a7f7.appspot.com',
            messagingSenderId: '141980297000'
        });
    }

    render() {
        return (
            <View>
                <Header headerText = 'Login Page'/>
                <LoginForm/>
            </View>
        ); 
    }
}

export default LoginScreen;

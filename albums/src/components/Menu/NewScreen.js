// TODO: Delete Later
import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Button} from 'react-native';

class LoginScreen extends React.Component {
  render() {

    console.log('Login: ', this.props)
    return (
      <View>
        <Text>New Screen</Text>
        <Button 
          title = "Login"
          onPress = {()=> this.props.navigation.navigate('Login')}  
        />
        <Button 
          title = "Home"
          onPress = {()=> this.props.navigation.navigate('Home')}  
        />
      </View>
    );
  }
}

export default LoginScreen;





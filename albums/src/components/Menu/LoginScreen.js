import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Button} from 'react-native';

class LoginScreen extends React.Component {
  render() {

    console.log('Login: ', this.props)
    return (
      <View>
        <Text>Loging In</Text>
        <Button 
          title = "Lets go home"
          onPress = {()=> {console.log('Home: ', this.props)}}  
        />
      </View>
    );
  }
}

export default LoginScreen;





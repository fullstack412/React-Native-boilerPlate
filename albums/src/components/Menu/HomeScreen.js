import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component {
  render() {

    console.log('Home: ', this.props)

    return (
      <View>
        <Text>Take it home</Text>
        <Button 
          title = "Logging in the first step"
          onPress = {()=> this.props.navigation.navigate('Home')}  
        />
      </View>
    );
  }
}

export default HomeScreen;





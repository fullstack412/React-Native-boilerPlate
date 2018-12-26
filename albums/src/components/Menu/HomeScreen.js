// TODO: Delete Later
import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet } from 'react-native';
import { Button, CardSection, Card } from '../common'

class HomeScreen extends React.Component {
  render() {

    return (
      <Card>
        <CardSection>
          <Button onPress = {()=> this.props.navigation.navigate('Login')}>
            Login
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=> this.props.navigation.navigate('New')}>
            New
          </Button>        
        </CardSection>
      </Card>
    );
  }
}

export default HomeScreen;





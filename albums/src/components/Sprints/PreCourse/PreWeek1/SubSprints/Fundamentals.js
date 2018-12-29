import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Header } from '../../../../common';

class Fundamentals extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Fundamentals, Functions, and Booleans'
    const introduction = 'This section is dedicated to reviewing JavaScript fundamentals';
    // const body = 'For limited customization we can use DrawerItems component provided by react-navigation in contentComponent. In case we want to update the styles of the drawer, make it scrollable or add a header/footer we can still achieve it by using the DrawerItems. It will handle the navigation on its own. Below is an example of how to achieve it.';
    const end = 'This guide covers the various navigation components available in React Native. If you are just getting started with navigation, you will probably want to use React Navigation. React Navigation provides an easy to use navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both iOS and Android.'
    console.log('main: ', this.props.navigation)
    return (
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}{"\n"}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
            Introduction:{"\n"}{introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            There are 6 different primitive data types in JavaScript.
              {"\n"}
            A primitive is data that is not an object and has no methods
              {"\n"}
              Number: 1, 2, 3
              {"\n"}
              String: "Hello World"
              {"\n"}
              Boolean: true, false
              {"\n"}
              Null: var helloWorld = null;
              {"\n"}
              Undefined: var goodbyeWorld = undefined;
              {"\n"}
              Symbol: var symbol = Symbol();
              {"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            There are two ways of writing functions.
            {"\n"}
            Function declaration: 
            {"\n"}
            {`function helloWorld() {
              return "hello world"
            }`}
            {"\n"}
            Function expression: 
            {"\n"}
            {`var helloWorld = function() {
              return "hello world"
            }`}
          </Text>
        </CardSection>
        
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCWeek2')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCList')}>
            Home
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
  },
  thumbnailStyle: {
    height: 46,
    width: 46
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});

export default Fundamentals;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class WhileLoop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { headerConetentStyle, headerTextStyle } = Styles;
    const topic = "While Loop";
    const introduction = 'This section is dedicated to reviewing while loops in JavaScript';
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
            Here is a refresher on the syntax of the "while" loop:
            {"\n"}
            {
              `
              while (<this statement is true>) {
                // execute this line of code
                // change something so that the true statement in the parenthesis above gets closer to being false
                // If you do not change anything, you will end up creating an infinite while loop and your browser will crash
              }
              `
            }
            {"\n"}
            For example:
            {"\n"}
            {
              `var num = 6;
               while (num > 0) {
                 console.log(num);
                 num--;
               }
            `
            }
            {"\n"}
            The console will log: 
            {"\n"}
            6
            {"\n"}
            5
            {"\n"}
            4
            {"\n"}
            3
            {"\n"}
            2
            {"\n"}
            1
            {"\n"}

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

export default WhileLoop;
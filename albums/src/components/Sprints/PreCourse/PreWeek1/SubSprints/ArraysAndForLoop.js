import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class ArraysAndForLoop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { headerConetentStyle, headerTextStyle } = Styles;
    const topic = "Arrays and For Loops";
    const introduction = 'This section is dedicated to reviewing arrays and for loops in JavaScript';
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
            This is an array:
            {"\n"}
            var thisIsAnArray = [1, 2, 3, 4];
            {"\n"}
            An array is a collection of data. An array will always have an opening bracket, [, and a closing bracket, ]. 
            Each individual piece of data in an array is separated by commas. An array can be empty, and an array can also 
            store any types of data. Here are some more examples of arrays:
            {"\n"}
            var thisIsAnEmptyArray = [];
            {"\n"}
            var thisIsAnArrayWithALotOfDifferentDataTypes = [1, 'hello world', 'foo bar', true, false];
            {"\n"}
            Each value in an array can be accessed by referring to its index. Arrays are 0-indexed, which means the first element is at index 0, 
            the second element is at index 1, the third element is at index 2, etc. 
            {"\n"}
            Here are a few examples of how you can access specific elements in an array:
            {"\n"}
            thisIsAnArrayWithALotOfDifferentDataTypes[0] // => 1
            {"\n"}
            thisIsAnArrayWithALotOfDifferentDataTypes[1] // => 'hello world'
            {"\n"}
            thisIsAnArrayWithALotOfDifferentDataTypes[2] // => 'foo bar'
            {"\n"}
            Arrays also have different properties that can be accessed. Arrays have a length property which tells you how many elements 
            are in an array. 
            {"\n"}
            var thisIsAnotherArray = ['hello', 'world'];
            console.log(thisIsAnotherArray.length) // => 2;
            {"\n"}
            Arrays have a push property that allows you to add a piece of data to the end of an array.
            {"\n"}
            var foo = ['hello', 'bar'];
            {"\n"}
            foo.push('world');
            {"\n"}
            console.log(foo) // => ['hello', 'bar', 'world'];
            {"\n"}
            Arrays have a pop property that allows you to remove a piece of data from the end of an array.
            {"\n"}
            foo.pop();
            {"\n"}
            console.log(foo) // =>['hello', 'bar'];
            {"\n"}
            Arrays have a shift property that allows you to remove a piece of data from the beginning of an array.
            {"\n"}
            foo.shift();
            {"\n"}
            console.log(foo) // => ['bar'];
            {"\n"}
            Arrays have an unshift property that allows you to add data to the beginning of an array.
            {"\n"}
            foo.unshift('hello world');
            {"\n"}
            console.log('foo') // => ['hello world', 'bar'];
            {"\n"}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            You can iterate through arrays by using for loops. Here is a refresher on the syntax of for loops:
            {"\n"}
            var anExampleOfAnotherArray = ['hello', 'world', 'foo', 'bar'];
            {"\n"}
            {
            `for (var i = 0; i < anExampleOfAnotherArray.length; i++) {
              console.log(anExampleOfAnotherArray[i]);
            }
            `
            }
            {"\n"}
            If that for loop were to run, the console would log the following:
            {"\n"}
            'hello'
            {"\n"}
            'world'
            {"\n"}
            'foo'
            {"\n"}
            'bar'
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

export default ArraysAndForLoop;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class ArraysAndForLoop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizData: {
        "quiz" : {
          "quiz1" : {
            "question1" : {
              "correctoption" : "option4",
              "options" : {
                "option1" : "true",
                "option2" : "false",
                "option3" : "hello",
                "option4" : "world"
              },
              "question" : `
              var array = [true, false, 'hello', 'world'];
              console.log(array[3]);

              What is logged to the console?
              `
            },
            "question2" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "array.push('foobar')",
                  "option2" : "array.pop('foobar')",
                  "option3" : "array.shift('foobar')",
                  "option4" : "array.unshift('foobar')"
                },
              "question" : `
              var array = [true, false, 'hello', 'world'];
              
              I want to add 'foobar' to the end of this array. How would I do that?
              `
            },
            "question3" : {
              "correctoption" : "option4",
              "options" : {
                "option1" : "array.push('foobar')",
                "option2" : "array.pop('foobar')",
                "option3" : "array.shift('foobar')",
                "option4" : "array.unshift('foobar')"
                },
              "question" : `
              var array = [true, false, 'hello', 'world'];
              
              I want to add 'foobar' to the beginning of this array. How would I do that?
              `
            },
            "question4" : {
              "correctoption" : "option2",
              "options" : {
                "option1" : "BLANK1 = var i = 0, BLANK2 = i < array.length, BLANK3 = i--",
                "option2" : "BLANK1 = var i = 0, BLANK2 = i < array.length, BLANK3 = i++",
                "option3" : "BLANK1 = var i = 0, BLANK2 = i <= array.length, BLANK3 = i++",
                "option4" : "BLANK1 = var i = 1, BLANK2 = array.length < 1, BLANK3 = i++",
                },
              "question" : `
              var array = [true, false, 'hello', 'world'];
              for (BLANK1; BLANK2; BLANK3) {
                console.log(array[i]);
              }

              Fill in the blanks so that the console logs the following to the console:
              true
              false
              'hello'
              'world'
              `
            },
            "question5" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "BLANK1 = array[i] % 2 !== 0, BLANK2 = newArray.push(array[i])",
                  "option2" : "BLANK1 = array[i] % 2 === 0, BLANK2 = newArray.push(array[i])",
                  "option3" : "BLANK1 = array[i] % 2 !== 0, BLANK2 = newArray.pop(array[i])",
                  "option4" : "BLANK1 = array[i] % 2 !== 0, BLANK2 = newArray.unshift(array[i])",
                },
              "question" : `
              Write a function remove that accepts an array of numbers and removes all even numbers from the array and returns a new array.

              var array = [1, 2, 3, 4, 5, 6]
              remove(array) // => [1, 3, 5]
              function remove(array) {
                var newArray = [];
                for (var i = 0; i < array.length; i++) {
                  if (BLANK1 {
                    BLANK2
                  }
                }
                return newArray;
              }

              Fill in the blanks.
              `
            }
          }
        }      
      }
    }
  }

  render() {
    const { headerConetentStyle, headerTextStyle, container, textContainer } = Styles;
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
        <CardSection style = { container }>
          <Text style = { textContainer }>
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            This is an array:
          </Text>
            {"\n"}{"\n"}
            var thisIsAnArray = [1, 2, 3, 4];
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            An array is a collection of data. An array will always have an opening bracket, [, and a closing bracket, ]. 
            Each individual piece of data in an array is separated by commas. An array can be empty, and an array can also 
            store any types of data. Here are some more examples of arrays:
          </Text>
            {"\n"}{"\n"}
            var thisIsAnEmptyArray = [];
            {"\n"}
            var thisIsAnArrayWithALotOfDifferentDataTypes = [1, 'hello world', 'foo bar', true, false];
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>            
            Each value in an array can be accessed by referring to its index. Arrays are 0-indexed, which means the first element is at index 0, 
            the second element is at index 1, the third element is at index 2, etc. 
            {"\n"}
            Here are a few examples of how you can access specific elements in an array:
            </Text>
            {"\n"}{"\n"}
            thisIsAnArrayWithALotOfDifferentDataTypes[0] // => 1
            {"\n"}
            thisIsAnArrayWithALotOfDifferentDataTypes[1] // => 'hello world'
            {"\n"}
            thisIsAnArrayWithALotOfDifferentDataTypes[2] // => 'foo bar'
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            Arrays also have different properties that can be accessed. Arrays have a length property which tells you how many elements 
            are in an array. 
            </Text>
            {"\n"}
            var thisIsAnotherArray = ['hello', 'world'];
            console.log(thisIsAnotherArray.length) // => 2;
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            Arrays have a push property that allows you to add a piece of data to the end of an array.
            </Text>
            {"\n"}{"\n"}
            var foo = ['hello', 'bar'];
            {"\n"}
            foo.push('world');
            {"\n"}
            console.log(foo) // => ['hello', 'bar', 'world'];
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            Arrays have a pop property that allows you to remove a piece of data from the end of an array.
            </Text>
            {"\n"}{"\n"}
            foo.pop();
            {"\n"}
            console.log(foo) // =>['hello', 'bar'];
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>            
            Arrays have a shift property that allows you to remove a piece of data from the beginning of an array.
            </Text>
            {"\n"}{"\n"}
            foo.shift();
            {"\n"}
            console.log(foo) // => ['bar'];
            {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            Arrays have an unshift property that allows you to add data to the beginning of an array.
            </Text>
            {"\n"}{"\n"}
            foo.unshift('hello world');
            {"\n"}
            console.log('foo') // => ['hello world', 'bar'];
            {"\n"}
          </Text>
        </CardSection>
        <CardSection style = { container }>
          <Text style = { textContainer }>
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            You can iterate through arrays by using for loops. Here is a refresher on the syntax of for loops:
            </Text>
            {"\n"}{"\n"}
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
        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('While Loop')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Objects')}>
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
  container:{
    flexDirection: 'row'
  },
  textContainer:{
    flex: 1,
     flexWrap: 'wrap'
  },
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
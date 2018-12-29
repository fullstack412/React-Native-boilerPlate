import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Fundamentals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizData: {
        "quiz" : {
          "quiz1" : {
            "question1" : {
              "correctoption" : "option1",
              "options" : {
                "option1" : "Boolean",
                "option2" : "String",
                "option3" : "String and Boolean",
                "option4" : "Number"
              },
              "question" : "'True' is a "
            },
            "question2" : {
              "correctoption" : "option3",
              "options" : {
                  "option1" : "Boolean",
                  "option2" : "String",
                  "option3" : "Number",
                  "option4" : "String and Number"
                },
              "question" : "6 is a "
            },
            "question3" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "18",
                  "option2" : "'99' (data type is a String)",
                  "option3" : "99 (data type is a Number)",
                  "option4" : "The console will return an error message because JavaScript doesn't support type coercion"
                },
              "question" : "console.log('9' + 9) will display ____ on the console"
            },
            "question4" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "1",
                  "option2" : "2",
                  "option3" : "3",
                  "option4" : "4"
                },
              "question" : "10 % 3 ="
            },
            "question5" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "expression",
                  "option2" : "declaration",
                  "option3" : "expression and declaration",
                  "option4" : "No idea. Coding is hard."
                },
              "question" : "function foo() { return 'bar' } is a function _____"
            }
          }
        }      
      }
    }
  }

  render() {
    const { headerConetentStyle, headerTextStyle } = Styles;
    const topic = 'Fundamentals and Functions'
    const introduction = 'This section is dedicated to reviewing JavaScript fundamentals';
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
        <Playquiz quizData = { this.state.quizData }/>
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
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class WhileLoop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizData: {
        "quiz" : {
          "quiz1" : {
            "question1" : {
              "correctoption" : "option4",
              "options" : {
                "option1" : "var",
                "option2" : "const",
                "option3" : "let",
                "option4" : "while"
              },
              "question" : `
              We are trying to create a while loop, but something is missing. Fill in the blank.

              var foo = true;
              var num = 1;
              _____(foo) {
                console.log(num);
                num++;
                if (num === 3) {
                  foo = false;
                }
              }
              `
            },
            "question2" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "num >= n",
                  "option2" : "num <= n",
                  "option3" : "n",
                  "option4" : "sum < n"
                },
              "question" : `
              Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0.
              function sum(n) {
                var num = 0;
                var sum = 0;
                while (_________) {
                  sum += num;
                  num++;
                }
                return sum;
              }

              Fill in the blank.
              `
            },
            "question3" : {
              "correctoption" : "option3",
              "options" : {
                  "option1" : "product++",
                  "option2" : "product--",
                  "option3" : "multiplier++",
                  "option4" : "multiplier--"
                },
              "question" : `
              The factorial of n is the product of all the integers preceding n, starting with 1. Let's implement the factorial function.
              function factorial(n) { 
                var product = 1;
                var multiplier = 1;
                while (multiplier <= n) {
                  product *= multiplier;
                  ______________;
                } 
                return product;
              } 

              Fill in the blank;
              `
            },
            "question4" : {
              "correctoption" : "option4",
              "options" : {
                "option1" : "10 9 8 7 6 5 4 3 2 1",
                "option2" : "Happy New Year!",
                "option3" : "Happy New Year! 10 9 8 7 6 5 4 3 2 1",
                "option4" : "10 9 8 7 6 5 4 3 2 1 Happy New Year!"
                },
              "question" : `
              function countdown() {
                var num = 10;
                while (num > 0) {
                  console.log(num);
                  num--;
                }
                console.log('Happy New Year!');
              }

              countdown();

              What will be logged to the console?
              `
            },
            "question5" : {
              "correctoption" : "option3",
              "options" : {
                  "option1" : "Blank 1: num > count, Blank 2: repeated += str, Blank 3: num++",
                  "option2" : "Blank 1: num < count, Blank 2: repeated = str, Blank 3: num++",
                  "option3" : "Blank 1: num < count, Blank 2: repeated += str, Blank 3: num++",
                  "option4" : "Blank 1: num < count, Blank 2: repeated += str, Blank 3: num--"
                },
              "question" : `
              Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
              function repeatString(str, count) {
                var num = 0;
                var repeated = ''
                while (Blank 1) {
                  Blank 2;
                  Blank 3;
                }
                return repeated;
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
        <CardSection style = { container }>
          <Text style = { textContainer }> 
            <Text style = {{ fontWeight: 'bold', color: 'purple' }}>
            Here is a refresher on the syntax of the "while" loop:
            </Text>
            {"\n"}{"\n"}
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
        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Variables in JavaScript')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Arrays and For Loops')}>
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

export default WhileLoop;
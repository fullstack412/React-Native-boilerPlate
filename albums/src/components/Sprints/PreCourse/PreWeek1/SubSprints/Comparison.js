// Booleans, Comparisons & Conditionals
// Logical Operators and More Conditionals

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Comparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: {
        "quiz" : {
          "quiz1" : {
            "question1" : {
              "correctoption" : "option2",
              "options" : {
                "option1" : "True",
                "option2" : "False"
              },
              "question" : "3 === '3' evaluates to"
            },
            "question2" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "True",
                  "option2" : "False"
                },
              "question" : "2 != '2' evaluates to"
            },
            "question3" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "the block of code inside the if statement will be returned",
                  "option2" : "the block of code inside the else statement will be returned"
                },
              "question" : `
              function ifElse(boolean){  
                 if (boolean) {
                   return 'the block of code inside the if statement will be returned'
                 } else {
                   return 'the block of code inside the else statement will be returned'
                 }
               }
               
               ifElse (true);


               What will the function ifElse return in this scenario?
               `
            },
            "question4" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "True",
                  "option2" : "False"
                },
              "question" : "'2' === 2 || 'hello' === 'hello' evaluates to"
            },
            "question5" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "True",
                  "option2" : "False"
                },
              "question" : "'2' === 2 && 'hello' === 'hello' evaluates to"
            }
          }
        }      
      }
    }
  }

  render() {
    const { headerConetentStyle, headerTextStyle, container, textContainer } = Styles;
    const topic = "Booleans, Comparisons, Conditionals, and Logical Operators";
    const introduction = 'This section is dedicated to reviewing Booleans, if/else statements, and comparison and logical operators.';
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
              Booleans are a data type that are used to represent true and false values. 
            </Text>
            {"\n"}{"\n"}
            {`For example, if you type into your console "9 < 3", your console will return the Boolean, false.`}
            {"\n"}
            {`If you type into your console "3 < 9", your console will return the Boolean, true.`}
            {"\n"}{"\n"}
            <Text style = {{ fontWeight: 'bold', color: 'purple' }}>
              There are many different comparison operators that can be used to produce Booleans. 
              {"\n"}
              These are the comparison operators that can be used in JavaScript:
            </Text>
            {"\n"}{"\n"}
            {`> greater than`}
            {"\n"}
            {`< less than`}
            {"\n"}
            {`>= greater than or equal to`}
            {"\n"}
            {`<= less than or equal to`}
            {"\n"}
            {`=== equal to`}
            {"\n"}
            {`!== not equal to`}
            {"\n"}{"\n"}
            <Text style = {{ fontWeight: 'bold', color: 'purple' }}>
            JavaScript also has the comparison operators == and !=. In general, it is preferable to use === and !==, 
            because both of those symbols ensure that the value as well as the type are the same. You should only use == and != in very
            rare circumstances. Here are some examples to clarify the difference between == and === and between != and !==. 
            {"\n"}{"\n"}
            </Text>
            1 == '1' // => true
            {"\n"}
            1 === '1' // => false
          </Text>
        </CardSection>
        <CardSection style = { container } >
          <Text style = { textContainer }>
          <Text style = {{ fontWeight: 'bold', color: 'purple' }}>
            {`JavaScript also has the following logical operators: !, ||, &&.`}
            </Text>
            {"\n"}{"\n"}
            ! reverses the value of a Boolean expression. For example:
            {"\n"}{"\n"}
            !false // => true
            {"\n"}
            !(3 > 2) // => false
            {"\n"}
            !('hello'.length === 5) // => false
            {"\n"}
            Here is how the ! operator can be used with == and ===
            {"\n"}
            1 != '1' // => false
            {"\n"}
            1 !== '1' // => true
            {"\n"}
            1 != true // => false
            {"\n"}
            1 !== true // => true
            {"\n"}{"\n"}
            || evaluates two expressions. If either expression is true, the entire statement is considered true. 
            If neither expression is true, then the statement will evaluate to false.
            {"\n"}{"\n"}
            'hello' === 'world' || 'hello' === 'hello' // => true
            {"\n"}
            'hello' === 'world' || 'foo' === 'bar' // => false
            {"\n"}{"\n"}
            {`&& evaluates two expressions. If both expressions are true, the statement is considered true. If either statement is false, the entire statement is false.`}
            {"\n"}{"\n"}
            {`hello' === 'hello' && 'world' === 'world' // => true`}
            {"\n"}
            {`'hello' === 'hello' && 'foo' === 'bar' // => false`}
            {"\n"}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            In JavaScript, you can write conditional statements using "if" and "else"
            {"\n"}
            {`
            if (<this condition is true>) {
              // execute this line of code
            } else {
              // execute this line of code if the first statement isn't true
            }
            `}
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

export default Comparison;
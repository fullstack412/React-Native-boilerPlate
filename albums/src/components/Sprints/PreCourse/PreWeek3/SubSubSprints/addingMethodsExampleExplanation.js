import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class AddingMethodsExampleExplanation extends Component {
  render() {
    const { boldHeader, text, bold, func, balance, closure, amount, object, key } = Styles;

    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Explanation:{'\n'}
          </Text>
          So lets make some lines and explain it:{'\n'}var{' '}
          <Text style={object}>
            account3{' '}
          </Text>
          ={' '}
          <Text style={func}>
            addingMethods(
            <Text style={balance}>
              300
            </Text>
            ){'\n'}
          </Text>
          var{' '}
          <Text style={object}>
            account4{' '}
          </Text>
          ={' '}
          <Text style={func}>
            addingMethods(
            <Text style={balance}>
              400
            </Text>
            ){'\n'}
          </Text>
          These lines make a two copy from the function{' '}
          <Text style={func}>
            addingMethods{' '}
          </Text>
          but with initial value {' '}
          <Text style={balance}>
            300{' '}
          </Text>
          and{' '}
          <Text style={balance}>
            400{' '}
          </Text>
          now if I call{' '}
          <Text style={object}>
            account3{' '}
          </Text>
          what I will get?{'\n'}
          <Text style={object}>
            an object{' '}
          </Text>
          has{' '}
          <Text style={key}>
            3 keys{' '}
          </Text>
          with{' '}
          <Text style={balance}>
            balance{' '}
          </Text>
          variable (global for thiss{' '}
          <Text style={object}>
            object{' '}
          </Text>
          and local for{' '}
          <Text style={func}>
            addingMethods
          </Text>
          ) and it value is{' '}
          <Text style={balance}>
            300{' '}
          </Text>
          not{' '}
          <Text style={balance}>
            400
          </Text>
          .{'\n'}{'\n'}
          {/* extra explanation */}
          So now we have{' '}
          <Text style={object}>
            an object{' '}
          </Text>
          has{' '}
          <Text style={key}>
            keys{' '}
          </Text>
          inside it{' '}
          <Text style={key}>
            functions
          </Text>
          , so to execute a function we need the name of this function and parentheses as we siad above.{'\n'}
          <Text style={bold}>
            But remember, it is{' '}
            <Text style={object}>
              an object{' '}
            </Text>
            so the name of the{' '}
            <Text style={key}>
              function{' '}
            </Text>
            is the name of the{' '}
            <Text style={key}>
              key{' '}
            </Text>
            that is inside it.{'\n'}
          </Text>
          {'\n'}
          So to execute the{' '}
          <Text style={key}>
            function{' '}
          </Text>
          that inside{' '}
          <Text style={key}>
            withdraw key {' '}
          </Text>
          we will write:{'\n'}
          <Text style={object}>
            acccount3
          </Text>
          .
          <Text style={key}>
            withdraw
          </Text>
          (
          <Text style={amount}>
            95
          </Text>
          ),{' '}now what will happened?{'\n'}
          This line will execute the{' '}
          <Text style={key}>
            function{' '}
          </Text>
          inside the key{' '}
          <Text style={key}>
            withdraw{' '}
          </Text>
          that is inside the{' '}
          <Text style={object}>
            object{' '}
          </Text>
          with the argument{' '}
          <Text style={amount}>
            95
          </Text>
          .{'\n'}
          What is the output and the value of the{' '}
          <Text style={balance}>
            balance{' '}
          </Text>
          ?{'\n'}
          Success withdraw{' '}
          <Text style={balance}>
            5
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            95
          </Text>

          {/* account2 */}
          .{'\n'}{'\n'}What about if I execute{' '}
          <Text style={object}>
            acccount2(
            <Text style={balance}>
              35
            </Text>
            )
          </Text>
          ?{'\n'}The same approach it will execute the{' '}
          <Text style={object}>
            withdraw{' '}
          </Text>
          function that is inside the variable{' '}
          <Text style={object}>
            account2{' '}
          </Text>
          and the output will be => {'"'}Success withdraw{' '}
          <Text style={balance}>
            35
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            165
          </Text>
          .{'\n'}{'\n'}
          <Text style={bold}>
            So what we get from the{' '}
            <Text style={func}>
              clouser{' '}
            </Text>
            is separate variable use the same function and return{' '}
            <Text style={object}>
              what this function is returned{' '}
            </Text>
            <Text style={balance}>
              depends on each one values
            </Text>
            .
          </Text>
        </Text>
      </CardSection>
    );
  }
}

const Styles = StyleSheet.create({
  boldHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  text: {
    color: 'black'
  },
  bold: {
    fontWeight: 'bold',
  },
  func: {
    color: 'green',
  },
  balance: {
    color: 'blue',
  },
  closure: {
    color: 'red',
  },
  amount: {
    color: '#9932CC',
  },
  object: {
    color: '#FF00FF',
  },
  key: {
    color: '#FF8C00',
  },
});
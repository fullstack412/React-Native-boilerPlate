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
            addingMethod(
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
            addingMethod(
            <Text style={balance}>
              400
            </Text>
            ){'\n'}
          </Text>
          These lines make a two copy from the function{' '}
          <Text style={func}>
            addingMethod{' '}
          </Text>
          but with{' '}
          <Text style={balance}>
            initial value 300 and 400{' '}
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
          variable (global for this {' '}
          <Text style={object}>
            object{' '}
          </Text>
          and local for{' '}
          <Text style={func}>
            addingMethod
          </Text>
          ) and it value is:{' '}
          <Text style={balance}>
            300{' '}
          </Text>
          not{' '}
          <Text style={balance}>
            400
          </Text>
          .{'\n'}{'\n'}



          {/* extra explanation */}
          Now remember if you want to execute a function you will write the name of the function then parentheses.{'\n'}
          So account1 or account2 is a varibles inside them a function, lets execute acccount1 now by the way we said:{'\n'}{'\n'}
          <Text style={object}>
            acccount3(
            <Text style={balance}>
              5
            </Text>
            )
          </Text>
          ,{' '}now what will happened?{'\n'}
          This line will execute the function{' '}
          <Text style={object}>
            withdraw{' '}
          </Text>
          that is inside the variable{' '}
          <Text style={object}>
            account1{' '}
          </Text>
          with the argument{' '}
          <Text style={balance}>
            5
          </Text>
          .{'\n'}Now what is the output?{'\n'}{'"'}
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
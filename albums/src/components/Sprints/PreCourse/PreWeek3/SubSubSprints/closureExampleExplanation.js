import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class closureExampleExplanation extends Component {
  render() {
    const { boldHeader, text, bold, func, balance, closure, amount, withdraw, iv } = Styles;

    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Explanation:{'\n'}
          </Text>
          <Text style={func}>
            We have a function called closure it is take{' '}
          </Text>
          <Text style={balance}>
            an initial value{' '}
          </Text>
          and it is return =>{' '}
          <Text style={withdraw}>
            a function called withdraw and this function return =>{' '}
          </Text>
          Success to withdraw +{' '}
          <Text style={amount}>
            the amount you want to withdraw
          </Text>
          ,{' '}OR Failed to withdraw +{' '}
          <Text style={amount}>
            the amount you want to withdraw
          </Text>
          .{'\n'}{'\n'}So lets make some lines and explain it:{'\n'}var{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          ={' '}
          <Text style={func}>
            closure(
            <Text style={balance}>
              100
            </Text>
            ){'\n'}
          </Text>
          var{' '}
          <Text style={withdraw}>
            account2{' '}
          </Text>
          ={' '}
          <Text style={func}>
            closure(
            <Text style={balance}>
              200
            </Text>
            ){'\n'}
          </Text>
          These lines make a two copy from the function{' '}
          <Text style={func}>
            closure{' '}
          </Text>
          but with initial value{' '}
          <Text style={balance}>
            100{' '}
          </Text>
          and{' '}
          <Text style={balance}>
            200
          </Text>
          .{'\n'}{'\n'}Now if I call{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          what I will get?{'\n'}
          Another function called{' '}
          <Text style={withdraw}>
            withdraw{' '}
          </Text>
          but again with initial value{' '}
          <Text style={balance}>
            100{' '}
          </Text>
          not{' '}
          <Text style={balance}>
            200
          </Text>
          .{'\n'}{'\n'}
          {/* extra explanation */}
          Now remember if you want to execute a function you will write the name of the function then parentheses.{'\n'}
          So account1 or account2 is a varibles inside them a function, lets execute acccount1 now by the way we said:{'\n'}{'\n'}
          <Text style={withdraw}>
            acccount1(
            <Text style={amount}>
              5
            </Text>
            )
          </Text>
          ,{' '}now what will happened?{'\n'}
          This line will execute the function{' '}
          <Text style={withdraw}>
            withdraw{' '}
          </Text>
          that is inside the variable{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          with the argument{' '}
          <Text style={balance}>
            5
          </Text>
          .{'\n'}{'\n'}
          What is the output and the value of the{' '}
          <Text style={balance}>
            balance
          </Text>
          ?{'\n'}
          {'"'}Success to withdraw{' '}
          <Text style={amount}>
            5
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            95
          </Text>

          {/* account2 */}
          .{'\n'}{'\n'}What about if I execute{' '}
          <Text style={withdraw}>
            acccount2(
            <Text style={amount}>
              35
            </Text>
            )
          </Text>
          ?{'\n'}The same approach it will execute the{' '}
          <Text style={withdraw}>
            withdraw{' '}
          </Text>
          function that is inside the variable{' '}
          <Text style={withdraw}>
            acccount2
          </Text>
          .{'\n'}{'\n'}
          What is the output and the value of the{' '}
          <Text style={balance}>
            balance
          </Text>
          ?{'\n'}
          {'"'}Success to withdraw{' '}
          <Text style={amount}>
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
            <Text style={withdraw}>
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
  withdraw: {
    color: '#FF8C00',
  },
  iv: {
    color: '#FF00FF',
  },
});
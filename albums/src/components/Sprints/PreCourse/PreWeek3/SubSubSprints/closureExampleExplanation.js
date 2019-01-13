import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class closureExampleExplanation extends Component {
  render() {
    const { boldHeader, text, func, balance, closure, amount, withdraw, iv } = Styles;

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
          .{'\n'}So lets make some lines and explain it:{'\n'}var{' '}
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
          but with{' '}
          <Text style={balance}>
            initial value 100 and 200{' '}
          </Text>
          now if I call{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          what I will get?{'\n'}Another function called{' '}
          <Text style={withdraw}>
          withdraw{' '}
          </Text>
          but again with{' '}
          <Text style={balance}>
            initial value 100{' '}
          </Text>
          not 200.
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
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class ClosureExample extends Component {
  render() {
    const { boldHeader, text, func, balance, closure, amount, second, iv } = Styles;
    return (
      <CardSection>
        <Text style={boldHeader}>
          Example:&nbsp;{'\n'}
          <Text style={func}>
            function closure(
              <Text style={Styles.balance}>
              initial
              </Text>
            ) {'{'}{'\n'}
            &nbsp;&nbsp;var
            <Text style={Styles.balance}>
              &nbsp;balance
            </Text>
            &nbsp;=
            <Text style={Styles.balance}>
              &nbsp;initial
            </Text>
            ;{'\n'}
            < Text style={Styles.closure}>
              &nbsp;&nbsp;function
              <Text style={Styles.withdraw}>
                &nbsp;withdraw
            </Text>
              (
                <Text style={Styles.amount}>
                amount
            </Text>
              ) {'{'}{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;if (
                <Text style={Styles.balance}>
                balance
            </Text>
              &nbsp;-
            <Text style={Styles.amount}>
                &nbsp;amount
            </Text>
              &nbsp;>=
              <Text style={Styles.text}>
                &nbsp;0
              </Text>
              ) {'{'}{'\n'}
              <Text style={Styles.balance}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balance
            </Text>
              &nbsp;=
            <Text style={Styles.balance}>
                &nbsp;balance
            </Text>
              &nbsp;-
            <Text style={Styles.amount}>
                &nbsp;amount
            </Text>
              ;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ‘
              <Text style={Styles.text}>
                Success to withdraw:
              </Text>
              ‘ +
              <Text style={Styles.amount}>
                &nbsp;amount
              </Text>
              ;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;{'}'}{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;return ‘
              <Text style={Styles.text}>
                Failed to withdraw:
              </Text>
              ‘ +
              <Text style={Styles.amount}>
                &nbsp;amount
            </Text>
              ;{'\n'}
              &nbsp;&nbsp;{'}'}{'\n'}
            </Text>
            &nbsp;&nbsp;return
            <Text style={Styles.withdraw}>
              &nbsp;withdraw
            </Text>
            ;{'\n'}{'}'}
          </Text>
        </Text>
      </CardSection >
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
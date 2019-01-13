import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class ClosureExample extends Component {
  render() {
    const { boldHeader, text, func, balance, closure, amount, withdraw, iv } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Example:{' '}{'\n'}
          </Text>
          <Text style={func}>
            function closure(
                <Text style={Styles.balance}>
              initial
                </Text>
            ) {'{'}{'\n'}
            {' '}{' '}var
              <Text style={Styles.balance}>
              {' '}balance
              </Text>
            {' '}=
              <Text style={Styles.balance}>
              {' '}initial
              </Text>
            ;{'\n'}
            < Text style={Styles.closure}>
              {' '}{' '}function
                <Text style={Styles.withdraw}>
                {' '}withdraw
              </Text>
              (
                  <Text style={Styles.amount}>
                amount
              </Text>
              ) {'{'}{'\n'}
              {' '}{' '}{' '}{' '}if (
                  <Text style={Styles.balance}>
                balance
              </Text>
              {' '}-
              <Text style={Styles.amount}>
                {' '}amount
              </Text>
              {' '}>=
                <Text style={Styles.text}>
                {' '}0
                </Text>
              ) {'{'}{'\n'}
              <Text style={Styles.balance}>
                {' '}{' '}{' '}{' '}{' '}{' '}balance
              </Text>
              {' '}=
              <Text style={Styles.balance}>
                {' '}balance
              </Text>
              {' '}-
              <Text style={Styles.amount}>
                {' '}amount
              </Text>
              ;{'\n'}
              {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={Styles.text}>
                Success to withdraw:
                </Text>
              ‘ +
                <Text style={Styles.amount}>
                {' '}amount
                </Text>
              ;{'\n'}
              {' '}{' '}{' '}{' '}{'}'}{'\n'}
              {' '}{' '}{' '}{' '}return ‘
                <Text style={Styles.text}>
                Failed to withdraw:
                </Text>
              ‘ +
                <Text style={Styles.amount}>
                {' '}amount
              </Text>
              ;{'\n'}
              {' '}{' '}{'}'}{'\n'}
            </Text>
            {' '}{' '}return
              <Text style={Styles.withdraw}>
              {' '}withdraw
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
    fontWeight: 'bold',
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
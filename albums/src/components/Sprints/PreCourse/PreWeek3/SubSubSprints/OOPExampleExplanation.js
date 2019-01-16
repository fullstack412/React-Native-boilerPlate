import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class OOPExampleExplanation extends Component {
  render() {
    const { boldHeader, text, boldText, func, balance, variable, amount, object, key } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          <Text style={text}>

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
  boldText: {
    fontWeight: 'bold'
  },
  func: {
    color: 'green',
  },
  balance: {
    color: 'blue',
  },
  variable: {
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
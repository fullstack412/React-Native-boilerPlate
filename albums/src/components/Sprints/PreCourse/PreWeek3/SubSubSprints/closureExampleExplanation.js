import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class closureExampleExplanation extends Component {
  render() {
    return (
      <CardSection>
        <Text style={Styles.boldHeader}>
          Example:We have function called closure return withdraw and it is a functionand this function return if the withdraw success or failed lets test thesevar account1= closure(100)var account2= closure(200)this line make a two copy from the function closure but with initial =100 and the other one initial =200 now if I call account1 what I will get?Yes another function called withdraw but again the initial = 100 not initial =200

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
  array: {
    color: 'red',
  },
  reduce: {
    color: 'blue',
  },
  cb: {
    color: 'green',
  },
  acc: {
    color: '#9932CC',
  },
  elem: {
    color: '#FF8C00',
  },
  i: {
    color: 'red',
  },
  iv: {
    color: '#FF00FF',
  },
});
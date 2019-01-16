import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class OOPExampleExplanation extends Component {
  render() {
    const { boldHeader, text, boldText, func, balance, variable, amount, object, key } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          Now we will improve the function that we takes before.{'\n'}
          We said that we have a problem, so what is this problem?{'\n'}
          The problem is each time we make a new variable from the function
          it will take another copy from it and this problem will{' '}
          <Text style={boldText}>
            use a lot of space in a big scale
          </Text>
          , so lets think in a way to decrease this space.{'\n'}

          1- Put the functions outside to have it one time no matter how much we make copies from the main function.{'\n'}
          2- Reach this functions by pass thier name inside the key in the object that we returnd.{'\n'}
          <Text style={boldText}>
            <Text style={variable}>
              But we have a problem, can you guess what is it?{'\n'}
            </Text>
            It is about how we can pass the value from this object to the functions are outside.{'\n'}
          </Text>
          So to solve this problem we will use the keyword{' '}
          <Text style={boldText}>
            “this”
          </Text>
          ,what is the keyword{' '}
          <Text style={boldText}>
            “this”{' '}
          </Text>
          ?{'\n'}
          <Text style={[variable, boldText]}>
            [90% of the time] It represents the object in the left of the dot (the one who called this function).{'\n'}{'\n'}
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